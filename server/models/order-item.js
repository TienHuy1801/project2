import mongoose from 'mongoose';
const { Schema, model }  = mongoose;

const orderItemSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
    required: true,
    //0 chua acp, 1 acp, 2 tu choi
  },
});

export default model("OrderItem", orderItemSchema);
