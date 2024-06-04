import { Octokit } from '@octokit/rest';

/**
 *
 * @param {import('@cloudflare/workers-types').EventContext<any,any,any>} context
 * @returns
 */
export async function onRequestGet(context) {
	try {
		const { env } = context;

		const configRaw = await env.HG_CONFIG;
		const config = JSON.parse(configRaw);

		const octokit = new Octokit({
			auth: config.gitToken
		});

		const configFile = await octokit.rest.repos.getContent({
			owner: config.gitOwner,
			repo: config.gitRepo,
			path: `${config.contentDir}/config.json`
		});

		const contentConfig = JSON.parse(atob(configFile.data.content));

		const collections = await Promise.all(
			Object.keys(contentConfig).map(async (collection) => {
				const collectionFile = await octokit.rest.repos.getContent({
					owner: config.gitOwner,
					repo: config.gitRepo,
					path: `${config.contentDir}/${collection}.json`
				});

				return {
					[collection]: JSON.parse(atob(collectionFile.data.content))
				};
			})
		);

		const collectionsObject = collections.reduce((acc, cur) => ({ ...acc, ...cur }), {});

		return new Response(JSON.stringify({ config: contentConfig, collections: collectionsObject }), {
			status: 200
		});
	} catch (error) {
		return new Response(JSON.stringify(error), {
			status: 500
		});
	}
}

/**
 *
 * @param {import('@cloudflare/workers-types').EventContext<any,any,any>} context
 * @returns
 */
export async function onRequestPut(context) {
	try {
		const { request, env } = context;

		const changes = await request.json();
		// const changes = {
		// 	todos: {
		// 		ajh3344r1j: {
		// 			title: 'Buy food',
		// 			slug: 'buy-food',
		// 			description: '<h4>Lets buy food</h4><p>Bread<br>Milk<br>Eggs</p> gaga',
		// 			done: false
		// 		}
		// 	},
		// 	globals: {
		// 		title: 'My site hey',
		// 		description: 'My site description',
		// 		keywords: 'my, site, keywords',
		// 		logo: 'favicon.png',
		// 		favicon: 'favicon.png'
		// 	}
		// };

		const configRaw = await env.HG_CONFIG;
		const config = JSON.parse(configRaw);

		const octokit = new Octokit({
			auth: config.gitToken
		});

		// Get reference from branch
		const ref = await octokit.rest.git.getRef({
			owner: config.gitOwner,
			repo: config.gitRepo,
			ref: `heads/${config.branch}`
		});

		// Get latest commit
		const commit = await octokit.rest.git.getCommit({
			owner: config.gitOwner,
			repo: config.gitRepo,
			commit_sha: ref.data.object.sha
		});

		// Create blob for each change and save file tree
		const blobs = await Promise.all(
			Object.keys(changes).map(async (collection) => {
				const blob = await octokit.rest.git.createBlob({
					owner: config.gitOwner,
					repo: config.gitRepo,
					content: JSON.stringify(changes[collection], null, 4),
					encoding: 'utf-8'
				});

				return {
					path: `${config.contentDir}/${collection}.json`,
					mode: '100644',
					type: 'blob',
					sha: blob.data.sha
				};
			})
		);

		// Create tree
		const newTree = await octokit.rest.git.createTree({
			owner: config.gitOwner,
			repo: config.gitRepo,
			tree: blobs,
			base_tree: commit.data.tree.sha
		});

		// Create commit
		const newCommit = await octokit.rest.git.createCommit({
			owner: config.gitOwner,
			repo: config.gitRepo,
			message: 'Update content',
			tree: newTree.data.sha,
			parents: [commit.data.sha]
		});

		// Update reference
		await octokit.rest.git.updateRef({
			owner: config.gitOwner,
			repo: config.gitRepo,
			ref: `heads/${config.branch}`,
			sha: newCommit.data.sha
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify(error), {
			status: 500
		});
	}
}

// Delete static file on GitHub
export async function onRequestDelete(context) {
	try {
		const { env, request } = context;
		const deleteData = await request.json();
		const collectionId = Object.keys(deleteData)[0];

		const configRaw = await env.HG_CONFIG;
		const config = JSON.parse(configRaw);

		const octokit = new Octokit({
			auth: config.gitToken
		});

		// TODO: check if file has changed since frontend version
		const fileInfo = await octokit.rest.repos.getContent({
			owner: config.gitOwner,
			repo: config.gitRepo,
			path: `${config.contentDir}/${collectionId}.json`,
			ref: config.branch
		});

		// Commit to file with deletion
		const response = await octokit.rest.repos.createOrUpdateFileContents({
			owner: config.gitOwner,
			repo: config.gitRepo,
			path: `${config.contentDir}/${collectionId}.json`,
			message: `Delete record(s) from ${collectionId} [CI SKIP]`,
			content: btoa(JSON.stringify(deleteData[collectionId], null, 4)),
			branch: config.branch,
			sha: fileInfo.data.sha
		});

		if (response.status !== 200) {
			return new Response(`Error deleting record(s) from ${collectionId}`, {
				status: 500
			});
		}

		return new Response(`Deleted record from ${collectionId}`, { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(error.message, {
			status: 500
		});
	}
}
