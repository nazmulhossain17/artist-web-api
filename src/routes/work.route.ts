import { Router } from "express";
import { workController } from "../controllers/work.controller";

const workRouter = Router();

workRouter.post("/", workController.createWork);
workRouter.get("/", workController.getWork);
workRouter.put("/:id", workController.updateWork);
workRouter.delete("/:id", workController.deleteWork);

export default workRouter;