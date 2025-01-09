import express, { Express, Request, Response } from "express";
import cors from "cors";
import userRouter from './routes/user.route'
import { feedbackRouter } from "./routes/feedback.route";
import workRouter from "./routes/work.route";
import fileUpload from "express-fileupload";
import contentRouter from "./routes/content.route";

const app: Express = express();


app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 10 * 1024 * 1024 },
}));
app.use("/api/users", userRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/work", workRouter);
app.use("/api/content", contentRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


export default app;