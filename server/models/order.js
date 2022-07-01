import mongoose from 'mongoose';
const { Schema, model }  = mongoose;

const orderSchema = new Schema({
  //user mua
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  price: {
    type: Number,
    default: 0,
  },
  status: {
    type: Number,
    default: 0,
    required: true,
    //0 chua acp, 1 dang giao, 2 done
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Order", orderSchema);
