import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: "Users"
 *     description: "Operations related to users"
 */

/**
 * @swagger
 * /api/load:
 *   get:
 *     summary: Load users into the database
 *     description: Fetches users along with posts and comments from JSONPlaceholder and stores them in MongoDB.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users loaded successfully
 *       500:
 *         description: Server error
 */
router.get("/load", userController.loadUsers);

/** 
 * @swagger
 * /api/users:
 *   delete:
 *     summary: Delete all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: All users deleted
 *       500:
 *         description: Server error
 */

router.delete("/users", userController.deleteAll);

/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

router.delete("/users/:userId", userController.deleteUser);



/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get("/users/:userId", userController.getUser);

/**
 * @swagger
 * /api/users:
 *   put:
 *     summary: Insert a new user into the database
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - username
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               website:
 *                 type: string
 *     responses:
 *       201:
 *         description: User inserted successfully
 *       409:
 *         description: User already exists
 *       500:
 *         description: Server error
 */
router.put("/users", userController.putUser);

export default router;
