import jwt from "jsonwebtoken";
import { sceret } from "../config.js";

export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token)
    return res.status(403).json("Yêu cầu đăng nhập");
  jwt.verify(token, sceret, function (error, decoded) {
    if (error)
      return res.status(403).json("Không có quyền truy cập");
    req.userId = decoded.id;
    next();
  });
}

