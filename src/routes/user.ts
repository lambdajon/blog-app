import { Router } from "express";
import UserController from "../controllers/UserController";
const router = Router({ mergeParams: true });
const ctrl = new UserController();

router.route("/register").post(ctrl.register);

export default router;
