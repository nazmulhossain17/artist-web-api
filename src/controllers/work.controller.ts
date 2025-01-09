import { Request, Response } from "express";
import { Work } from "../models/work.model";
import cloudinary from 'cloudinary';
import { UploadedFile } from 'express-fileupload';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const createWork = async (req: Request, res: Response): Promise<void> => {
//   try {
//     console.log("Received request to create work");

//     const file = req.files?.photo as UploadedFile;
//     if (!file) {
//       console.log("No photo provided");
//       res.status(400).json({ message: "Photo is required" });
//       return;
//     }

//     console.log("Uploading image to Cloudinary");
//     const result = await cloudinary.v2.uploader.upload(file.tempFilePath);
//     console.log("Image uploaded to Cloudinary", result);

//     const { title, tags } = req.body;
//     const image = result.url; // The URL of the uploaded image

//     // Validate required fields
//     if (!title || !tags) {
//       console.log("Missing title or tags");
//       res.status(400).json({ message: "Title and tags are required" });
//       return;
//     }

//     // Create work document in database
//     const work = await Work.create({ title, image, tags });
//     console.log("Work created successfully", work);

//     res.status(201).json({ message: "Work created successfully", work });
//   } catch (error: any) {
//     console.error("Error creating work:", error);
//     res.status(500).json({ message: "Error creating work", error: error.message || error });
//   }
// }


const createWork = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("Received request to create work");

    const { title, tags, image } = req.body; // Assume image is a string in the request body

    // Validate required fields
    if (!title || !tags || !image) {
      console.log("Missing title, tags, or image");
      res.status(400).json({ message: "Title, tags, and image are required" });
      return;
    }

    // Create work document in database
    const work = await Work.create({ title, image, tags });
    console.log("Work created successfully", work);

    res.status(201).json({ message: "Work created successfully", work });
  } catch (error: any) {
    console.error("Error creating work:", error);
    res.status(500).json({ message: "Error creating work", error: error.message || error });
  }
}


const getWork = async (req: Request, res: Response): Promise<void> => {
    const work = await Work.find();
    res.status(200).json({message: "Work fetched successfully", work})
}

const updateWork = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    const {title, tags} = req.body;
    const work = await Work.findByIdAndUpdate(id, {title, tags});
    res.status(200).json({message: "Work updated successfully", work})
}

const deleteWork = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    const work = await Work.findByIdAndDelete(id);
    res.status(200).json({message: "Work deleted successfully", work})
}

export const workController = {
  createWork,
  getWork,
  updateWork,
  deleteWork
}
