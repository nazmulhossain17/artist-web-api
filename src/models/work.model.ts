import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Work document
interface IWork extends Document {
  title: string;
  image: string;
  tags: string[];
}

const workSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: [String], required: true },
});

// Create and export the model with type information
const Work = mongoose.model<IWork>('Work', workSchema);

export { Work, IWork };
