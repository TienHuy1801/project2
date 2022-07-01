import { Router } from "express";
const router = Router();

import authRoutes from "./auth.js";
import productRoutes from "./product.js";
import cartRoutes from "./cart.js";
import orderRoutes from "./order.js";
import shopRoutes from "./shop.js";
import shipRoutes from "./ship.js";

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);
router.use("/shop", shopRoutes);
router.use("/ship", shipRoutes);

export default router;