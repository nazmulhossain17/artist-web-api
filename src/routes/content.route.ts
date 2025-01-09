import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const contentRouter = Router();

contentRouter.get('/content', (req: Request, res: Response) => {
  const filePath = path.join(__dirname, '../../content.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading content.json:", err);
      res.status(500).json({ message: "Error fetching content data" });
      return;
    }

    try {
      const content = JSON.parse(data);
      res.status(200).json(content);
    } catch (parseError) {
      console.error("Error parsing content.json:", parseError);
      res.status(500).json({ message: "Error parsing content data" });
    }
  });
});

export default contentRouter;