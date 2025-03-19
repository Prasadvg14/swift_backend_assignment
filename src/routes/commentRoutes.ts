import express from "express";
import * as commentController from "../controllers/commentController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: "Comments"
 *     description: "Operations related to comments"
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - postId
 *               - name
 *               - email
 *               - body
 *             properties:
 *               postId:
 *                 type: integer
 *                 description: The ID of the post to which the comment belongs
 *               name:
 *                 type: string
 *                 description: The name of the commenter
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email of the commenter
 *               body:
 *                 type: string
 *                 description: The content of the comment
 *     responses:
 *       201:
 *         description: Comment created successfully
 *       400:
 *         description: Invalid request data
 */
router.post("/", commentController.createComment);

/**
 * @swagger
 * /comments/{postId}:
 *   get:
 *     summary: Get all comments for a specific post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the post to get comments for
 *     responses:
 *       200:
 *         description: A list of comments for the given post
 *       404:
 *         description: No comments found for the given post
 */
router.get("/:postId", commentController.getCommentsByPostId);

/**
 * @swagger
 * /comments/{commentId}:
 *   delete:
 *     summary: Delete a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the comment to delete
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment not found
 */
router.delete("/:commentId", commentController.deleteComment);

export default router;
