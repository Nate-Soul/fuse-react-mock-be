import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./models/connect.js";

import contactRoute from "./routes/contact.router.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/contact", contactRoute);

app.listen(port, (req, res) => {
    connectDB();
    console.log(`Server is running on port: ${port}`);
})