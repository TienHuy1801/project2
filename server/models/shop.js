import mongoose from 'mongoose';
const { Schema, model }  = mongoose;

const shopSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

export default model("Shop", shopSchema);
