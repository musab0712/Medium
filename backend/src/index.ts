import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("/", (c) => {
  return c.text("helo index");
});

export default app;
// routes/blog.js
//import { Hono } from "hono";
// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";

// export const blogRouter = new Hono<{
//   Bindings: {
//     DATABASE_URL: string;
//     JWT_SECRET: string;
//   };
// }>();

// blogRouter.post("/", async (c) => {
//   const body = await c.req.json();
//   console.log(body);
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env?.DATABASE_URL,
//   }).$extends(withAccelerate());
//   const post = await prisma.post.create({
//     data: {
//       title: body.title,
//       content: body.content,
//       autherId: "1",
//     },
//   });
//   return c.text(" blog created ");
// });

// blogRouter.put("/", (c) => {
//   return c.text("helo user blog");
// });

// blogRouter.post("/:id", (c) => {
//   const id = c.req.param("id");
//   console.log(id);
//   return c.text("helo user blog id");
// });

// blogRouter.get("/bulk", (c) => {
//   return c.text("helo user blog bulk");
// });
