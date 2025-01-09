import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    data: { type: Object, required: true },
  },
);

// Create the Content model
const Content = mongoose.model('Content', contentSchema);

export default Content;