import express, { Express, Request, Response } from "express";
import cors from "cors";
import userRouter from './routes/user.route'


const app: Express = express();


app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


export default app;