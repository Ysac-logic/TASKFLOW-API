import { Router } from "express";
import { listUsers } from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/", listUsers);

export default usersRouter;
