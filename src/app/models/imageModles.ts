import mongoose from "mongoose";

const schema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, "Provide Image"],
  },
  uid: {
    type: String,
    required: [true, "Provide UID"],
  },
  public_id: {
    type: String,
    required: [true, "Provide public"],
  },
});

export const Image = mongoose.models.Image || mongoose.model("Image", schema);
