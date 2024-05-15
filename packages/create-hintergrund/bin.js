#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import * as p from '@clack/prompts';
import { bold, cyan, grey, yellow } from 'kleur/colors';
import { create } from './index.js';
import { dist, package_manager, generateRandomToken, hashPw } from './utils.js';

const { version } = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf-8'));
let cwd = process.argv[2] || '.';

console.log(`
${grey(`create-svelte version ${version}`)}
`);

p.intro('Welcome to hintergrund CMS!');

if (cwd === '.') {
	const dir = await p.text({
		message: 'Where should we create your project?',
		placeholder: '  (hit Enter to use current directory)'
	});

	if (p.isCancel(dir)) process.exit(1);

	if (dir) {
		cwd = /** @type {string} */ (dir);
	}
}

if (fs.existsSync(cwd)) {
	if (fs.readdirSync(cwd).length > 0) {
		const force = await p.confirm({
			message: 'Directory not empty. Continue?',
			initialValue: false
		});

		// bail if `force` is `false` or the user cancelled with Ctrl-C
		if (force !== true) {
			process.exit(1);
		}
	}
}

const options = await p.group(
	{
		gitOwner: () =>
			p.text({
				message: 'GitHub username or organization',
				required: true
			}),
		gitRepo: () =>
			p.text({
				message: 'GitHub repository name',
				required: true
			}),
		gitToken: () =>
			p.text({
				message:
					'GitHub Personal access token (with permissions to repo).\n If you don’t have one, create one at:\n https://github.com/settings/personal-access-tokens/new \n(read and write "Contents")',
				required: true
			}),
		contentDir: () =>
			p.text({
				message: 'Content directory (where your content collections will be stored)',
				placeholder: '  (for example, "src/content")'
			}),
		assetDir: () =>
			p.text({
				message: 'Asset directory (where your images and other assets will be stored)',
				placeholder: '  (for example, "static/images")'
			}),
		adminUrl: () =>
			p.text({
				message: 'Admin Panel URL (where you will log in to manage your content)',
				placeholder: '  (for example, "admin" will be accessible at "https://yourdomain.com/admin")'
			}),
		password: () =>
			p.password({
				message: 'Login Password for Admin Panel'
			}),
		passwordConfirm: () =>
			p.password({
				message: 'Confirm Password for Admin Panel'
			})
	},
	{ onCancel: () => process.exit(1) }
);

while (options.password !== options.passwordConfirm) {
	p.outro(yellow('Passwords do not match!'));
	options.password = await p.password({
		message: 'Login Password for Admin Panel'
	});
	options.passwordConfirm = await p.password({
		message: 'Confirm Password for Admin Panel'
	});
}

const hgSecret = generateRandomToken();

const hgPassword = await hashPw(options.password, hgSecret);

await create(cwd, {
	template: 'default',
	hgOptions: {
		gitOwner: options.gitOwner,
		gitRepo: options.gitRepo,
		contentDir: options.contentDir,
		assetDir: options.assetDir,
		gitToken: options.gitToken,
		adminUrl: options.adminUrl,
		hgSecret,
		hgPassword
	}
});

p.outro('Your project is ready!');

console.log('\nNext steps:');
let i = 1;

const relative = path.relative(process.cwd(), cwd);
if (relative !== '') {
	console.log(`  ${i++}: ${bold(cyan(`cd ${relative}`))}`);
}

console.log(
	`  ${i++}: ${bold(cyan(`login to your Cloudflare account and add the HG_CONFIG environment variable to your Pages project`))}(value can be found in your .dev.vars file)`
);
console.log(`  ${i++}: ${bold(cyan(`${package_manager} install @octokit/rest cookie`))}`);
console.log(`  ${i++}: ${bold(cyan(`npm run build`))}`);
console.log(`  ${i++}: ${bold(cyan(`wrangler pages dev build --live-reload`))}`);
