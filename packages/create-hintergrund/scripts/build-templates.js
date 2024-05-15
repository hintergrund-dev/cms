import fs from 'node:fs';
import path from 'node:path';
import parser from 'gitignore-parser';
import prettier from 'prettier';
import { transform } from 'sucrase';
import glob from 'tiny-glob/sync.js';
import { mkdirp, rimraf } from '../utils.js';

/** @param {string} content */
async function convert_typescript(content) {
	let { code } = transform(content, {
		transforms: ['typescript'],
		disableESTransforms: true
	});

	// sucrase leaves invalid class fields intact
	code = code.replace(/^\s*[a-z]+;$/gm, '');

	// Prettier strips 'unnecessary' parens from .ts files, we need to hack them back in
	code = code.replace(/(\/\*\* @type.+? \*\/) (.+?) \/\*\*\*\//g, '$1($2)');

	return await prettier.format(code, {
		parser: 'babel',
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 100
	});
}

/** @param {string} content */
function strip_jsdoc(content) {
	return content
		.replace(/ \/\*\*\*\//g, '')
		.replace(
			/\/\*\*([\s\S]+?)(@[\s\S]+?)?\*\/([\s\n]+)/g,
			(match, description, tags, whitespace) => {
				if (/^\s+(\*\s*)?$/.test(description)) {
					return '';
				}

				return `/**${description.replace(/\* $/, '')}*/${whitespace}`;
			}
		);
}

/** @param {Set<string>} shared */
async function generate_templates(shared) {
	const templates = fs.readdirSync('templates');

	for (const template of templates) {
		if (template[0] === '.') continue;

		const dir = `dist/templates/${template}`;
		const assets = `${dir}/assets`;
		mkdirp(assets);

		const cwd = path.resolve('templates', template);

		const gitignore_file = path.join(cwd, '.gitignore');
		if (!fs.existsSync(gitignore_file)) {
			throw new Error(`"${template}" template must have a .gitignore file`);
		}

		const gitignore = parser.compile(fs.readFileSync(gitignore_file, 'utf-8'));

		const ignore_file = path.join(cwd, '.ignore');
		if (!fs.existsSync(ignore_file)) throw new Error('Template must have a .ignore file');
		const ignore = parser.compile(fs.readFileSync(ignore_file, 'utf-8'));

		const files = glob('**/*', { cwd, filesOnly: true, dot: true });
		for (const name of files) {
			// ignore files that are written conditionally
			if (shared.has(name)) continue;

			// ignore contents of .gitignore or .ignore
			if (!gitignore.accepts(name) || !ignore.accepts(name) || name === '.ignore') continue;

			const dest = path.join(assets, name.replace(/^\./, 'DOT-'));
			mkdirp(path.dirname(dest));
			fs.copyFileSync(path.join(cwd, name), dest);
		}
	}
}

async function generate_shared() {
	const cwd = path.resolve('shared');

	/** @type {Set<string>} */
	const shared = new Set();

	/** @type {Array<{ name: string, include: string[], exclude: string[], contents: string }>} */
	const files = [];

	const globbed = glob('**/*', { cwd, filesOnly: true, dot: true });
	for (const file of globbed) {
		const contents = fs.readFileSync(path.join(cwd, file), 'utf8');

		/** @type {string[]} */
		const include = [];

		/** @type {string[]} */
		const exclude = [];

		let name = file;

		if (file.startsWith('+') || file.startsWith('-')) {
			const [conditions, ...rest] = file.split(path.sep);

			const pattern = /([+-])([a-z0-9]+)/g;
			let match;
			while ((match = pattern.exec(conditions))) {
				const set = match[1] === '+' ? include : exclude;
				set.push(match[2]);
			}

			name = rest.join('/');
		}

		if (name.endsWith('.ts') && !include.includes('typescript')) {
			// file includes types in TypeScript and JSDoc —
			// create .js file, with and without JSDoc
			const js = await convert_typescript(contents);
			const js_name = name.replace(/\.ts$/, '.js');

			// typescript
			files.push({
				name,
				include: [...include, 'typescript'],
				exclude,
				contents: strip_jsdoc(contents)
			});

			// checkjs
			files.push({
				name: js_name,
				include: [...include, 'checkjs'],
				exclude,
				contents: js
			});

			// no typechecking
			files.push({
				name: js_name,
				include,
				exclude: [...exclude, 'typescript', 'checkjs'],
				contents: strip_jsdoc(js)
			});

			shared.add(name);
			shared.add(js_name);
		} else {
			shared.add(name);
			files.push({ name, include, exclude, contents });
		}
	}

	files.sort((a, b) => a.include.length + a.exclude.length - (b.include.length + b.exclude.length));

	// fs.writeFileSync('dist/shared.json', JSON.stringify({ files }, null, '\t'));

	shared.delete('package.json');
	return shared;
}

async function main() {
	rimraf('dist');
	mkdirp('dist');

	const shared = await generate_shared();
	await generate_templates(shared);
}

main();
