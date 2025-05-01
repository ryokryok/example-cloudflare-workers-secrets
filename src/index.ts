export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(env.MY_VARIABLE);
	},
} satisfies ExportedHandler<Env>;
