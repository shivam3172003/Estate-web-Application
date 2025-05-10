import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import cookieParser from "cookie-parser";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);

app.listen(3300, () => {
  console.log("Server Started at http://localhost:3300");
});
