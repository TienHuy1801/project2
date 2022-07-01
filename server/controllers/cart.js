import mongoose from "mongoose";
import Cart from "../models/cart.js";

export async function getCart(req, res) {
  try {
    const userId = req.userId;
    const cart = await Cart.find({ userId: userId });

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function addToCart(req, res) {
  try {
    // check if user have product
    const userId = req.userId;
    const productId = req.body.productId;

    let cart = await Cart.findOne({ userId: userId, productId: productId });
    if (cart) cart.quantity = cart.quantity + 1;
    else
      cart = new Cart({
        userId: mongoose.Types.ObjectId(userId),
        productId: mongoose.Types.ObjectId(productId),
      });
    await cart.save();

    return res.status(201).json("Thêm vào giỏ hàng thành công");
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function removeFromCart(req, res) {
  try {
    const userId = req.userId;
    const productId = req.params.productId;
    await Cart.deleteOne({ userId: userId, productId: productId });

    return res.status(200).json("Xóa khỏi giỏ hàng thành công");
  } catch (error) {
    return res.status(500).json(error);
  }
}
