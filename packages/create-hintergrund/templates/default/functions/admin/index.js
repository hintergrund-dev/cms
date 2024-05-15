import { getTemplate } from './template';

/**
 *
 * @param {{request: Request, next: () => Promise<Response, env: {SECRET?: string}}} context
 * @returns {Promise<Request>}
 */
export async function onRequest(context) {
	return new Response(getTemplate('hg-admin'), {
		headers: {
			'content-type': 'text/html'
		}
	});
}
