"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User Management API",
            version: "1.0.0",
            description: "API for managing users, posts, and comments",
        },
        servers: [
            {
                url: process.env.Current_domain || "http://localhost:5000",
            },
        ],
        tags: [
            { name: "Users", description: "Operations related to users" },
            { name: "Posts", description: "Operations related to posts" },
            { name: "Comments", description: "Operations related to comments" },
        ],
    },
    apis: ["./src/routes/*.ts"], // Path to route files
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
console.log("Swagger running at http://localhost:5000/api-docs");
const setupSwagger = (app) => {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
};
exports.setupSwagger = setupSwagger;
