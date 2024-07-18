import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import courseRoutes from "./routes/course.routes.js";

config();
const app = express();

// Built-in middleware
app.use(express.json());
// Third-party middleware
app.use(cookieParser());
// http request logger in console
app.use(morgan("dev"));
//Third-party middleware
app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true }));

app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/user", userRoutes);
app.use("/api/v1/courses", courseRoutes);

app.use("/ping", (req, res) => {
  res.status(200).json({ data: "ping back" });
});

app.all("*", (req, res) => {
  res.status(404).json({ data: " 404 Not found" });
});

app.use(errorMiddleware);

export default app;
