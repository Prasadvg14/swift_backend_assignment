import CommentModel from "../models/Comment";

export const createComment = async (commentData: any) => {
  return await CommentModel.create(commentData);
};

export const getCommentsByPostId = async (postId: number) => {
  return await CommentModel.find({ postId });
};

export const deleteComment = async (commentId: number) => {
  return await CommentModel.deleteOne({ id: commentId });
};
