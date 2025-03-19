import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  postId: { type: Number, required: true },
  name: String,
  email: String,
  body: String
});

export default mongoose.model("Comment", commentSchema);
