import express, { Express, Request, Response } from "express";
import cors from "cors";
import userRouter from './routes/user.route'
import { feedbackRouter } from "./routes/feedback.route";
import workRouter from "./routes/work.route";
import fileUpload from "express-fileupload";

const app: Express = express();


app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000", // Replace with the actual front-end URL
      credentials: true, // This allows cookies to be sent along with the request
    })
  );
app.use(fileUpload({
    useTempFiles: true,
}));
app.use("/api/users", userRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/work", workRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


export default app;