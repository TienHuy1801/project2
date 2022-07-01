import { Router } from "express";

const router = Router();

import { register, editProfile, login, forgotPassword, changePassword, verifyAcc, accInfo } from "../controllers/auth.js";
import { verifyToken } from '../middleware/is-auth.js';

router.post("/register", register);
router.post("/", login);
router.put("/:userId", verifyToken, editProfile);
router.post("/password", forgotPassword);
router.post("/password/:userId", verifyToken, changePassword);
router.put("/verify/:userId", verifyToken, verifyAcc);
router.get("/me", verifyToken, accInfo);

export default router;