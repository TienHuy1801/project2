import { Router } from "express";

const router = Router();

import { getOrdersNotDeli, getOrders, acceptDelivery, doneDelivery } from "../controllers/ship.js";

router.get("/", getOrdersNotDeli);
router.get("/:shipperId", getOrders);
router.post("/:shipperId", acceptDelivery);
router.put("/:deliveryId", doneDelivery);

export default router;