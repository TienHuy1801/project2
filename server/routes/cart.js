import { Router } from "express";

const router = Router();

import { getCart, addToCart, removeFromCart } from "../controllers/cart.js";
import { verifyToken } from "../middleware/is-auth.js";

router.get("/", verifyToken, getCart);
router.post("/", verifyToken, addToCart);
router.delete("/:productId", verifyToken, removeFromCart);

export default router;