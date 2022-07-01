import Shop from "../models/shop.js";
import OrderItem from "../models/order-item.js";

export async function getProducts(req, res) {
  try {
    const sellerId = req.params.sellerId;
    if (sellerId != req.userId) return res.status(403).json("Không có quyền truy cập")
    const products = await Shop.find({ userId: sellerId });
    var prods = [];
    for (const prod of products)
      prods.push(prod.productId);

    return res.status(200).json(prods);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getOrders(req, res) {
  try {
    const sellerId = req.userId;
    console.log(sellerId);
    const orders = await OrderItem.find({ sellerId: sellerId });

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function acceptProduct(req, res) {
  try {
    const orderItemId = req.params.orderItemId;
    const item = await OrderItem.findOne({ _id: orderItemId });
    item.status = 1;
    await item.save();

    return res.status(200).json("Xác nhận sản phẩm thành công");
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function declineProduct(req, res) {
  try {
    const orderItemId = req.params.orderItemId;
    const item = await OrderItem.findOne({ _id: orderItemId });
    item.status = 2;
    await item.save();

    return res.status(200).json("Từ chối sản phẩm thành công");
  } catch (error) {
    return res.status(500).json(error);
  }
}
