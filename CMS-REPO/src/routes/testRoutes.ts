import Elysia, { t } from "elysia";
import { typeDecoration } from "../types/endpointContext";

export const TestRoutes = new Elysia({ prefix: "/api" }).use(typeDecoration).post(
  "/test",
  async ({ body, env }) => {
    const systemPrompt = `
    You are an AI agent.
    If user asks about math, calculate.
    If user asks general knowledge, answer clearly.
  `;

    return await env.AI.run("@cf/meta/llama-3-8b-instruct", {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: body.question },
      ],
    });
  },
  {
    body: t.Object({
      question: t.String(),
    }),
  },
);
