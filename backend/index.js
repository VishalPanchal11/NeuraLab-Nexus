import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

const server = app.listen(port, () =>
  console.log(`Server is running at https://localhost:${port}`)
);

mongoose
  .connect(databaseURL)
  .then(() => console.log("Database Connection Successfull"))
  .catch((err) => console.log(err.message));
