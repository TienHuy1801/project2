import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: "",
  },
  verify: {
    type: Boolean,
    default: false,
  },
});

export default model("User", userSchema);
