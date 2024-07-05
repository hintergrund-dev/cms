import { Octokit } from '@octokit/rest';

const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
};
function getMimeType(path) {
    const extension = path.slice(((path.lastIndexOf(".") - 1) >>> 0) + 2);
    return mimeTypes['.' + extension] || 'text/plain';
}

/**
 *
 * @param {import('@cloudflare/workers-types').EventContext<any,any,any>} context
 * @returns
 */
export async function onRequestGet(context) {
	try {
		const { env, params } = context;

        const configRaw = await env.HG_CONFIG;
		const config = JSON.parse(configRaw);

		const octokit = new Octokit({
			auth: config.gitToken
		});

        // Get URL parameter "path"
        const path = params.path;

        // Get file content
        const rawFile = await octokit.rest.repos.getContent({
            owner: config.gitOwner,
            repo: config.gitRepo,
            path: `${config.assetDir}/${path}`,
        });

        const mimeType = getMimeType(path);

        return new Response(JSON.stringify({image: rawFile.data.content, mimeType}), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
		
	} catch (error) {
		return new Response(JSON.stringify(error), {
			status: 500
		});
	}
}
