import { Router } from "express";
import userRoutes from "./user";
import authRoutes from "./auth";
import categoryRoutes from './categories'
const router = Router({ mergeParams: true });

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);

export default router;
