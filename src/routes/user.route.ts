import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();

router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);

export default router;