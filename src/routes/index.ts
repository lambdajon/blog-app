import { Router } from "express";
import userRoutes from "./user";
import authRoutes from "./auth";
import categoryRoutes from "./categories";
import postRoutes from "./post";
const router = Router({ mergeParams: true });

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/posts", postRoutes);
router.use("/categories", categoryRoutes);

export default router;
