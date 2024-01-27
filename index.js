import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ProjectRouter } from "./routes/projectOne.js";


const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

// app.use("/", async function (req, res) {
//     res.send("this is new project portfolio...")
// })
mongoose.connect(MONGO_URL).then((res) => console.log("database is connected..."))
    .catch((err) => console.log("database is not connected..."));




app.use("/projectone", ProjectRouter);

app.listen(PORT, () => console.log(`this project running on port no : ${PORT}`))