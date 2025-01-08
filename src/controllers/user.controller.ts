import { Request, Response } from "express";
import User, { IUser } from "../models/user.mode";
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body as { 
            name: string;
            email: string; 
            password: string;
        };

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const user: IUser = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body as { email: string; password: string };
    const user = await User.findOne({ email });
    if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        res.status(401).json({ message: "Invalid password" });
        return;
    }
    res.status(200).json({ message: "Login successful" });
}

export const userController = {
    createUser,
    loginUser
}
