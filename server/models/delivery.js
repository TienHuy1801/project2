import mongoose from 'mongoose';
const { Schema, model }  = mongoose;

const deliverySchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  shipperId: {
    type: Schema.Types.ObjectId,
    ref: "Shipper",
  },
});

export default model("Delivery", deliverySchema);
