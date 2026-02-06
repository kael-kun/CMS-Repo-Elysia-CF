import { Elysia } from "elysia";

export const typeDecoration = new Elysia().decorate({
  x: undefined,
} as unknown as {
  env: Env;
  ctx: ExecutionContext;
});
