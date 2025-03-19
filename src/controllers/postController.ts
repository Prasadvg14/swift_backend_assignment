import { Request, Response } from "express";
import * as postService from "../services/postService";

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await postService.getPostById(Number(req.params.postId));
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    await postService.deletePost(Number(req.params.postId));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};
