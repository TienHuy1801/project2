import mongoose from "mongoose";
import Order from "../models/order.js";
import Delivery from "../models/delivery.js";

export async function getOrdersNotDeli(req, res) {
  try {
    const orders = await Order.find({ status: 0 });

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
}
export async function getOrders(req, res) {
  try {
    const shipperId = req.params.shipperId;
    const delis = await Delivery.find({ shipperId: shipperId });
    var orders = [];
    for (const deli of delis) {
      let order = await Order.findOne({ _id: deli.orderId });
      orders.push(order);
    }

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function acceptDelivery(req, res) {
  try {
    const shipperId = req.params.shipperId;
    const orderId = req.body.orderId;
    const order = await Order.findOne({ _id: orderId });
    const deli = new Delivery({
      orderId: mongoose.Types.ObjectId(orderId),
      shipperId: mongoose.Types.ObjectId(shipperId),
    });
    await deli.save();
    order.status = 1;
    await order.save();

    return res.status(200).json("Xác nhận giao đơn thành công");
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function doneDelivery(req, res) {
  try {
    const deliveryId = req.params.deliveryId;
    const delivery = await Delivery.findOne({ _id: deliveryId });
    const order = await Order.findOne({ _id: delivery.orderId });
    order.status = 2;
    await order.save();

    return res.status(200).json("Giao hàng thành công");
  } catch (error) {
    return res.status(500).json(error);
  }
}
