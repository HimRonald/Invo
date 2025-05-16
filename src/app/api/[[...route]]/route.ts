import { auth } from "@/lib/auth";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { AuthGuard } from "@/server/middleware/auth-guard";
import { HonoFactory } from "@/server/factory";

export const runtime = "nodejs";

const app = HonoFactory.createApp().basePath("/api");

app.use("*", AuthGuard);

app.on(
  ["POST", "GET"],
  "/auth/*",
  (c) => {
    return auth.handler(c.req.raw);
  },
  cors({
    origin: "http://localhost:3000",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.get("/ping", (c) => {
  return c.json(
    {
      message: "Pong!",
    },
    200
  );
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
export const HEAD = handle(app);
export const OPTIONS = handle(app);
