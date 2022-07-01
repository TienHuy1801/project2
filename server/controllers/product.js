import mongoose from "mongoose";
import Product from "../models/product.js";
import Shop from "../models/shop.js";
import Cart from "../models/cart.js";
import User from "../models/user.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function addProduct(req, res) {
  try {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    
    if (price < 0) return res.status(401).json("Giá là số âm");

    const userId = req.userId;
    var user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).json("Không tìm thấy tài khoản");

    const product = new Product({
      title: title,
      price: price,
      description: description,
      imageUrl: imageUrl,
    });
    await product.save();

    const shop = new Shop({
      userId: mongoose.Types.ObjectId(userId),
      productId: product._id,
    });
    await shop.save();

    return res.status(201).json("Thêm thành công");
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function editProduct(req, res) {
  try {
    const productId = req.params.productId;
    const product = await Product.findOne({ _id: productId });

    product.title = req.body.title;
    product.imageUrl = req.body.imageUrl;
    product.price = req.body.price;
    product.description = req.body.description;
    await product.save();

    return res.status(201).json("Sửa thành công");
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function deleteProduct(req, res) {
  try {
    const productId = req.params.productId;

    await Shop.deleteMany({ productId: productId });
    await Cart.deleteMany({ productId: productId });
    await Product.deleteOne({ _id: productId });

    return res.status(201).json("Xóa thành công");
  } catch (err) {
    return res.status(500).json(err);
  }
}
