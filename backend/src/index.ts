import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/user/signup", (c) => {
  return c.text("helo user signup");
});

app.post("/api/v1/user/signin", (c) => {
  return c.text("helo user signin");
});

app.post("/api/v1/blog", (c) => {
  return c.text("helo user blog");
});

app.put("/api/v1/blog", (c) => {
  return c.text("helo user blog");
});

app.post("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("helo user blog id");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("helo user blog bulk");
});

export default app;
