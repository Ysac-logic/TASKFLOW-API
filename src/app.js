import express from "express";

// import authRouter from "./routes/auth.routes.js";
import usersRouter from "./routes/users.routes.js";
import projectsRouter from "./routes/projects.routes.js";
// import tasksRouter from "./routes/tasks.routes.js";

import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";




const app = express();

app.use(express.json());

// app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
// app.use("/tasks", tasksRouter);
app.use(notFound);
app.use(errorHandler);

export default app;