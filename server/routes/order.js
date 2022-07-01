import { Router } from "express";

const router = Router();

import { getOrder, addOrder } from "../controllers/order.js";
import { verifyToken } from "../middleware/is-auth.js";

router.get("/", verifyToken, getOrder);
router.post("/", verifyToken, addOrder);

export default router;