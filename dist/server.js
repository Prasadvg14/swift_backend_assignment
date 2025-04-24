"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const swagger_1 = require("./config/swagger");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Connect to MongoDB
(0, db_1.default)();
(0, swagger_1.setupSwagger)(app);
// Middleware
app.use(express_1.default.json()); // Parse JSON request bodies
// Routes
app.use("/api", userRoutes_1.default);
app.use("/posts", postRoutes_1.default);
app.use("/comments", commentRoutes_1.default);
// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
