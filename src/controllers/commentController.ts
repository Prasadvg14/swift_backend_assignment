import { Request, Response } from "express";
import * as commentService from "../services/commentService";

export const createComment = async (req: Request, res: Response) => {
  try {
    const comment = await commentService.createComment(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

export const getCommentsByPostId = async (req: Request, res: Response) => {
  try {
    const comments = await commentService.getCommentsByPostId(Number(req.params.postId));
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    await commentService.deleteComment(Number(req.params.commentId));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
};
