import { Router } from "express";
import userRoutes from "./user";

const router = Router({ mergeParams: true });

router.use("/users", userRoutes);

export default router;
