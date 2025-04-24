# 🚀 Swift Backend Assignment

A scalable and well-structured **RESTful API** built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**. This project manages users, posts, and comments with proper routing, middleware, logging, error handling, and Swagger documentation.

---

## 📌 Table of Contents

- [📌 Table of Contents](#-table-of-contents)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Setup & Installation](#️-setup--installation)
- [🌐 Environment Variables](#-environment-variables)
- [🧪 API Documentation (Swagger)](#-api-documentation-swagger)
- [📦 Available Scripts](#-available-scripts)
- [📂 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB (via Mongoose)
- **Documentation:** Swagger (OpenAPI 3.0)
- **Utilities:** dotenv, nodemon, ts-node, winston (logging)
- **Dev Dependencies:** TypeScript, @types packages

---

## 📁 Project Structure

swift_backend_assignment/ ├── src/ │ ├── config/ # DB and environment config │ ├── controllers/ # Request handlers │ ├── models/ # Mongoose schemas │ ├── routes/ # API route definitions │ ├── utils/ # Helper functions and loggers │ ├── server.ts # Entry point ├── dist/ # Compiled JS output ├── .env # Environment variables ├── package.json # Project metadata & scripts ├── tsconfig.json # TypeScript configuration └── README.md # Project documentation



## ⚙️ Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Prasadvg14/swift_backend_assignment.git
cd swift_backend_assignment
```

2. **Install dependencies:**
npm install

3. **Configure your environment:**

Create a .env file in the root directory with the following:

PORT=5000
MONGO_URI=your_mongodb_uri
BASE_URL=http://localhost:5000


4. **Run the server:**

In development:
npm run dev
Build and run:


npm run build
npm start
🌐 Environment Variables

Variable	Description
PORT	Server listening port
MONGO_URI	MongoDB connection string
BASE_URL	Base URL for Swagger documentation
🧪 API Documentation (Swagger)
Swagger is used for clear, interactive API documentation.

Local: http://localhost:5000/api-docs

Production: ${BASE_URL}/api-docs

The Swagger URL is set dynamically using the BASE_URL from .env.

**📦 Available Scripts**

Command	Description
npm run dev	Run with nodemon and ts-node (dev mode)
npm run build	Compile TypeScript to JavaScript
npm start	Run built code (from dist/)


**📂 Deployment**

This project can be deployed on:

Render

Heroku

Vercel (via API routes)

Any Node-compatible cloud service

Make sure to update your environment variables in the deploy dashboard.

**🤝 Contributing**

Contributions, issues, and feature requests are welcome!

Fork the project

Create your feature branch (git checkout -b feature/awesome)

Commit your changes (git commit -m 'add awesome feature')

Push to the branch (git push origin feature/awesome)

Open a pull request 🎉

📄 **License**

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

👨‍💻 **Author**

Prasad Vutukuru

GitHub: @Prasadvg14

LinkedIn: linkedin.com/in/prasadvg14

