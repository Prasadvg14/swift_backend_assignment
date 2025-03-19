import express from "express";
import * as postController from "../controllers/postController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: "Posts"
 *     description: "Operations related to posts"
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *               - userId
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post
 *               body:
 *                 type: string
 *                 description: The content of the post
 *               userId:
 *                 type: integer
 *                 description: The ID of the user who created the post
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Invalid request data
 */
router.post("/", postController.createPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: A list of posts
 *       500:
 *         description: Server error
 */
router.get("/", postController.getAllPosts);

/**
 * @swagger
 * /posts/{postId}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the post to delete
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 */
router.delete("/:postId", postController.deletePost);

export default router;
