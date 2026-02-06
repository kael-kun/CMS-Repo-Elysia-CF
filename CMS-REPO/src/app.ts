import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { TestRoutes } from "./routes/testRoutes";
import openapi from "@elysiajs/openapi";
import { CloudflareAdapter } from "elysia/adapter/cloudflare-worker";
export const app = () => {
  return new Elysia({ aot: false, normalize: true, adapter: CloudflareAdapter })
    .onAfterResponse(() => {
      console.log("Response", performance.now());
    })
    .use(cors())
    .use(openapi())
    .use(TestRoutes);
};
