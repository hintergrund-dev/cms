import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @param {string} dir */
export function mkdirp(dir) {
	try {
		fs.mkdirSync(dir, { recursive: true });
	} catch (e) {
		if (/** @type {any} */ (e).code === 'EEXIST') return;
		throw e;
	}
}

/** @param {string} path */
export function rimraf(path) {
	(fs.rmSync || fs.rmdirSync)(path, { recursive: true, force: true });
}

/**
 * @template T
 * @param {T} x
 */
function identity(x) {
	return x;
}

/**
 * @param {string} from
 * @param {string} to
 * @param {(basename: string) => string} rename
 */
export function copy(from, to, rename = identity) {
	if (!fs.existsSync(from)) return;

	const stats = fs.statSync(from);

	if (stats.isDirectory()) {
		fs.readdirSync(from).forEach((file) => {
			copy(path.join(from, file), path.join(to, rename(file)));
		});
	} else {
		mkdirp(path.dirname(to));
		fs.copyFileSync(from, to);
	}
}

/** @param {string} path */
export function dist(path) {
	return fileURLToPath(new URL(`./dist/${path}`, import.meta.url).href);
}

/** @type {string} */
export const package_manager = get_package_manager() || 'npm';

/**
 * Supports npm, pnpm, Yarn, cnpm, bun and any other package manager that sets the
 * npm_config_user_agent env variable.
 * Thanks to https://github.com/zkochan/packages/tree/main/which-pm-runs for this code!
 */
function get_package_manager() {
	if (!process.env.npm_config_user_agent) {
		return undefined;
	}
	const user_agent = process.env.npm_config_user_agent;
	const pm_spec = user_agent.split(' ')[0];
	const separator_pos = pm_spec.lastIndexOf('/');
	const name = pm_spec.substring(0, separator_pos);
	return name === 'npminstall' ? 'cnpm' : name;
}

export function generateRandomToken() {
	const tokenBytes = crypto.getRandomValues(new Uint8Array(32));
	return btoa(String.fromCharCode(...tokenBytes));
}

/**
 *
 * @param {string} password
 * @param {string} pepper
 * @returns
 */
export async function hashPw(password, pepper) {
	// Create salt
	const salt = crypto.getRandomValues(new Uint8Array(16));

	// Convert password and pepper to Uint8Array
	const pass = new TextEncoder().encode(password);
	const pepp = new TextEncoder().encode(pepper);

	// Combine salt, pepper, and password hash
	const combined = new Uint8Array(salt.length + pepper.length + password.length);
	combined.set(salt);
	combined.set(pepp, salt.length);
	combined.set(pass, salt.length + pepper.length);

	// Hash combined
	const hashBuffer = await crypto.subtle.digest('SHA-256', combined);

	// Convert hashBuffer to Uint8Array
	const hash = new Uint8Array(hashBuffer);

	// Combine salt and hash
	const combinedHash = new Uint8Array(salt.length + hash.length);
	combinedHash.set(salt);
	combinedHash.set(hash, salt.length);

	// Return combined hash as base64 string
	return btoa(new Uint8Array(combinedHash).reduce((s, b) => s + String.fromCharCode(b), ''));
}
