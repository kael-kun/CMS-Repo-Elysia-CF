import { app } from "./app";
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    console.log("Ctx", ctx);
    console.log("Env", env);
    const instance = app();
    instance.decorate({
      ctx,
      env,
    });
    return await instance.handle(request);
  },
};
