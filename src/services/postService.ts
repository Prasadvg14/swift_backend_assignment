import PostModel from "../models/Post";

export const createPost = async (postData: any) => {
  return await PostModel.create(postData);
};

export const getAllPosts = async () => {
  return await PostModel.find();
};

export const getPostById = async (postId: number) => {
  return await PostModel.findOne({ id: postId });
};

export const deletePost = async (postId: number) => {
  return await PostModel.deleteOne({ id: postId });
};
