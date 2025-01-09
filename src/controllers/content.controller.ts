import { Request, Response } from "express";
import Content from "../models/content.model";

const getContent = async (req: Request, res: Response): Promise<void> => {
    try {
      const content = await Content.find();
      console.log("Fetched content:", content); // Debugging log
      res.status(200).json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };

const createContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { section, data } = req.body;

    // Validate required fields
    if (!section || !data) {
      res.status(400).json({ message: "Section and data are required" });
      return;
    }

    // Create a new content document
    const newContent = new Content({ section, data });
    await newContent.save();

    res.status(201).json({ message: "Content created successfully", content: newContent });
  } catch (error) {
    console.error("Error creating content:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

const updateContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { section, data } = req.body;

    // Validate required fields
    if (!section && !data) {
      res.status(400).json({ message: "At least one of section or data must be provided for update" });
      return;
    }

    // Find and update the content document
    const updatedContent = await Content.findByIdAndUpdate(
      id,
      { section, data },
      { new: true, runValidators: true }
    );

    if (!updatedContent) {
      res.status(404).json({ message: "Content not found" });
      return;
    }

    res.status(200).json({ message: "Content updated successfully", content: updatedContent });
  } catch (error: any) {
    console.error("Error updating content:", error);
    res.status(500).json({ message: "Server Error", error: error.message || error });
  }
};

export const contentController = {
    getContent,
    createContent,
    updateContent
}
