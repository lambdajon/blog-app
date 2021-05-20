import { Router } from "express";
import UserController from "../controllers/UserController";
import Validate from "../middleware/validation";
import requestSchema from "../requestSchema/user";
const router = Router({ mergeParams: true });
const ctrl = new UserController();

router.route("/register").post(Validate(requestSchema.register), ctrl.register);

export default router;
