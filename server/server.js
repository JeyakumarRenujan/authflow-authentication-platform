import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(helmet());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.use(cookieParser());

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AuthFlow API is running..."
    });
});

const PORT = process.env.PORT || 5000;

app.use(
    "/api/auth",
    authRoutes
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});