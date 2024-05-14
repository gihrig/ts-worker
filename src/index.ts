/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Bot Management is an enterprise addon - Works in local but not in cloud
    // let bot_score = JSON.stringify(request.cf.botManagement.score);
    let bot_score = "n/a";
    return new Response(JSON.stringify({ "hello": "world", "confidence": bot_score }),
      {
        headers: { "content-type": "application/json" },
      });
  },
};
