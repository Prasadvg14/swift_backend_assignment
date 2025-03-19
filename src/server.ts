import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { setupSwagger } from "./config/swagger";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
setupSwagger(app);


// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
