import { Router } from "express";
import AuthController from "../controllers/AuthController";
import Validate from "../middleware/validation";
import requestSchema from "../requestSchema/auth";
const router = Router({ mergeParams: true });
const ctrl = new AuthController();

router.route("/login").post(Validate(requestSchema.login), ctrl.login);

export default router;
