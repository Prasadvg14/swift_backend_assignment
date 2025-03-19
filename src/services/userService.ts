import User from "../models/User";
import Post from "../models/Post";
import Comment from "../models/Comment";
import axios from "axios";
import logger from "../utils/loggerUtils"; // Custom logger utility



const JSON_PLACEHOLDER = "https://jsonplaceholder.typicode.com";

class UserService {
  // Load users, posts, and comments into the database
  // static async loadUsersData() {
  //   try {
  //     const users = await User.find();
  //     const posts = await Post.find();
  //     const comments = await Comment.find();

  //     if (users.length === 0 || posts.length === 0 || comments.length === 0) {
  //       throw new Error("No data available in the database to load.");
  //     }

  //     const data = { users, posts, comments };
  //     return  { 
  //              success: true, message: "Data loaded successfully",
  //              data : data
  //             };
  //   } catch (error : any ) {
  //     console.error("Failed to load user data", error);
  //     throw new Error(`Failed to load user data: ${error.message}`);
  //   }
  // }


  static async loadUsersData() {
    try {
      logger.info("Fetching users, posts, and comments from JSONPlaceholder...");

      // Fetch data from JSONPlaceholder
      const [users, posts, comments] = await Promise.all([
        axios.get(`${JSON_PLACEHOLDER}/users`).then(res => res.data),
        axios.get(`${JSON_PLACEHOLDER}/posts`).then(res => res.data),
        axios.get(`${JSON_PLACEHOLDER}/comments`).then(res => res.data),
      ]);

      let newUsers = [];
      for (const user of users) {
        const exists = await User.findOne({ id: user.id });
        if (!exists) {
          newUsers.push(user);
        }
      }
      if (newUsers.length > 0) {
        await User.insertMany(newUsers);
        logger.info(`${newUsers.length} new users added to MongoDB.`);
      } else {
        logger.warn("No new users to add.");
      }

      let newPosts = [];
      for (const post of posts) {
        const exists = await Post.findOne({ id: post.id });
        if (!exists) {
          newPosts.push(post);
        }
      }
      if (newPosts.length > 0) {
        await Post.insertMany(newPosts);
        logger.info(`${newPosts.length} new posts added to MongoDB.`);
      } else {
        logger.warn("No new posts to add.");
      }

      let newComments = [];
      for (const comment of comments) {
        const exists = await Comment.findOne({ id: comment.id });
        if (!exists) {
          newComments.push(comment);
        }
      }
      if (newComments.length > 0) {
        await Comment.insertMany(newComments);
        logger.info(`${newComments.length} new comments added to MongoDB.`);
      } else {
        logger.warn("No new comments to add.");
      }

      return {
        success: true,
        message: "Data loaded successfully",
        added: {
          users: newUsers.length,
          posts: newPosts.length,
          comments: newComments.length,
        },
      };
    } catch (error: any) {
      logger.error(`Failed to load user data: ${error.message}`);
      throw new Error(`Failed to load user data: ${error.message}`);
    }
  }


  // Delete all users and associated data
  static async deleteAllUsers() {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});
    return { message: "All users and related data deleted" };
  }

  // Delete specific user and related data
  static async deleteUserById(userId: number) {
    const user = await User.findOne({ id: userId });
    if (!user) throw new Error(`User with ID ${userId} not found`);

    await User.deleteOne({ id: userId });
    await Post.deleteMany({ userId });
    await Comment.deleteMany({ postId: userId });

    return { message: `User ${userId} and related data deleted` };
  }

  // Get user and their posts with comments
  static async getUserById(userId: number) {
    const user = await User.findOne({ id: userId });
    if (!user) throw new Error("User not found");

    const posts = await Post.find({ userId });

    for (const post of posts) {
      post.set("comments", await Comment.find({ postId: post.id }), { strict: false });
    }

    return { user, posts };
  }

  // Add a new user
  static async addUser(newUser: any) {
    const existingUser = await User.findOne({ id: newUser.id });
    if (existingUser) throw new Error("User already exists");

    const user = new User(newUser);
    await user.save();

    return user;
  }
}

export default UserService;

