import { readRequestBody, verifyPw } from './utils';
import { sign } from './jwt';

export async function onRequestPost(context) {
	const { env, request } = context;

	const configRaw = await env.HG_CONFIG;
	const config = JSON.parse(configRaw);

	try {
		const body = await readRequestBody(request);

		const password = body.password;

		if (await verifyPw(config.hgPassword, password, config.hgSecret)) {
			const token = await sign(config.hgSecret);

			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: {
					'Set-cookie': `token=${token}; Secure; HttpOnly; Path=/; SameSite=Strict`
				}
			});
		} else {
			return new Response(JSON.stringify({ success: false, message: 'Wrong password' }), {
				status: 401
			});
		}
	} catch (error) {
		return new Response(error, { status: 401 });
	}
}
