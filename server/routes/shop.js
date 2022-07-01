import { Router } from "express";

const router = Router();

import { getProducts, getOrders, acceptProduct, declineProduct } from "../controllers/shop.js";
import { verifyToken } from "../middleware/is-auth.js";

router.get("/delivering", verifyToken, getOrders);
router.get("/:sellerId/products", verifyToken, getProducts);
router.put("/:orderItemId/accept", acceptProduct);
router.put("/:orderItemId/decline", declineProduct);

export default router;