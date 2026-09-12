import { Router } from "express";

import {
  listProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";

const projectsRouter = Router();

projectsRouter.get("/", listProjects);
projectsRouter.get("/:id", getProjectById);
projectsRouter.post("/", createProject);
projectsRouter.patch("/:id", updateProject);
projectsRouter.delete("/:id", deleteProject);

export default projectsRouter;