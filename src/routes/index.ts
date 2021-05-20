import { Router } from "express";
import userRoutes from "./user";
import authRoutes from "./auth";

const router = Router({ mergeParams: true });

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
