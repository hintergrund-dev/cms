import fs from 'node:fs';
import path from 'node:path';
import { mkdirp, copy, dist } from './utils.js';

/** @type {import('./types/index.js').create} */
export async function create(cwd, options) {
	mkdirp(cwd);
	write_template_files(options.template, options.name, cwd);
	write_dev_vars(cwd, options.hgOptions);
}

/**
 * @param {string} template
 * @param {'typescript' | 'checkjs' | null} types
 * @param {string} name
 * @param {string} cwd
 */
function write_template_files(template, name, cwd) {
	const dir = dist(`templates/${template}`);
	copy(`${dir}/assets`, cwd, (name) => name.replace('DOT-', '.'));
}

function write_dev_vars(cwd, hgOptions) {
	const dev_vars = `ENVIRONMENT=development
HG_CONFIG = ${JSON.stringify(hgOptions)}`;

	fs.writeFileSync(path.join(cwd, '.dev.vars'), dev_vars);
}
