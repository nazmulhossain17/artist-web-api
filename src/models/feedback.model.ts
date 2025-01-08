import mongoose, { Document } from "mongoose";

interface IFeedback extends Document {
    text: string;
    name: string;
    company: string;
    image: string;
    createdAt: Date;
}

const feedbackSchema = new mongoose.Schema({
    text: { type: String, required: true, message: "Text is required" },
    name: { type: String, required: true, message: "Name is required" },
    company: { type: String, required: true, message: "Company is required" },
    image: { type: String, default: "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png", message: "Image is required" },
    createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model<IFeedback>('Feedback', feedbackSchema);

export { Feedback, IFeedback };

