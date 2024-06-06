import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },

  price: {
    type: Number,
    required: [true, "price is required"],
  },
  frameSize: {
    type: String,
    required: [true, "frameSize is required"],
  },
  photoSize: {
    type: String,
    required: [true, "photoSize is required"],
  },
  frameType: {
    type: String,
    required: [true, "frameType is required"],
  },
  frameSizeImageUrl: {
    type: String,
    required: [true, "frameSizeImageUrl is required"],
  },
  frameUrl: {
    type: String,
    required: [true, "frameUrl is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  borderCSS: {
    imageSlice: {
      type: String,
      required: [true, "imageSlice is required"],
    },
    imageWidth: {
      type: String,
      required: [true, "imageWidth is required"],
    },
    borderOutset: {
      type: String,
      required: [true, "borderOutset is required"],
    },
    borderRepeat: {
      type: String,
      required: [true, "borderRepeat is required"],
    },
  },
});

export const Frame = mongoose.models.Frame || mongoose.model("Frame", schema);
