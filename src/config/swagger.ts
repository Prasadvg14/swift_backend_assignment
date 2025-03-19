import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

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
        url: "http://localhost:5000",
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

const swaggerDocs = swaggerJsDoc(swaggerOptions);

console.log("Swagger running at http://localhost:5000/api-docs");

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
