import { Request, Response } from "express";
import { Feedback } from "../models/feedback.model";


const createFeedback = async (req: Request, res: Response): Promise<void> => {
    const { text, name, company, image } = req.body;
    const feedback = new Feedback({ text, name, company, image });
    await feedback.save();
    res.status(201).json({ message: "Feedback created successfully", feedback });
}

const getFeedback = async (req: Request, res: Response): Promise<void> => {
    const feedback = await Feedback.find();
    res.status(200).json({ message: "Feedback fetched successfully", feedback });
}

const updateFeedback = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { text, name, company, image } = req.body;
    const feedback = await Feedback.findByIdAndUpdate(id, { text, name, company, image }, { new: true });
    res.status(200).json({ message: "Feedback updated successfully", feedback });
}

const deleteFeedback = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: "Feedback deleted successfully" });
}

export const feedbackController = {
    createFeedback,
    getFeedback,
    updateFeedback,
    deleteFeedback
}
