"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Post_1 = __importDefault(require("../models/Post"));
const Comment_1 = __importDefault(require("../models/Comment"));
const axios_1 = __importDefault(require("axios"));
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils")); // Custom logger utility
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
    static loadUsersData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                loggerUtils_1.default.info("Fetching users, posts, and comments from JSONPlaceholder...");
                // Fetch data from JSONPlaceholder
                const [users, posts, comments] = yield Promise.all([
                    axios_1.default.get(`${JSON_PLACEHOLDER}/users`).then(res => res.data),
                    axios_1.default.get(`${JSON_PLACEHOLDER}/posts`).then(res => res.data),
                    axios_1.default.get(`${JSON_PLACEHOLDER}/comments`).then(res => res.data),
                ]);
                let newUsers = [];
                for (const user of users) {
                    const exists = yield User_1.default.findOne({ id: user.id });
                    if (!exists) {
                        newUsers.push(user);
                    }
                }
                if (newUsers.length > 0) {
                    yield User_1.default.insertMany(newUsers);
                    loggerUtils_1.default.info(`${newUsers.length} new users added to MongoDB.`);
                }
                else {
                    loggerUtils_1.default.warn("No new users to add.");
                }
                let newPosts = [];
                for (const post of posts) {
                    const exists = yield Post_1.default.findOne({ id: post.id });
                    if (!exists) {
                        newPosts.push(post);
                    }
                }
                if (newPosts.length > 0) {
                    yield Post_1.default.insertMany(newPosts);
                    loggerUtils_1.default.info(`${newPosts.length} new posts added to MongoDB.`);
                }
                else {
                    loggerUtils_1.default.warn("No new posts to add.");
                }
                let newComments = [];
                for (const comment of comments) {
                    const exists = yield Comment_1.default.findOne({ id: comment.id });
                    if (!exists) {
                        newComments.push(comment);
                    }
                }
                if (newComments.length > 0) {
                    yield Comment_1.default.insertMany(newComments);
                    loggerUtils_1.default.info(`${newComments.length} new comments added to MongoDB.`);
                }
                else {
                    loggerUtils_1.default.warn("No new comments to add.");
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
            }
            catch (error) {
                loggerUtils_1.default.error(`Failed to load user data: ${error.message}`);
                throw new Error(`Failed to load user data: ${error.message}`);
            }
        });
    }
    // Delete all users and associated data
    static deleteAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.default.deleteMany({});
            yield Post_1.default.deleteMany({});
            yield Comment_1.default.deleteMany({});
            return { message: "All users and related data deleted" };
        });
    }
    // Delete specific user and related data
    static deleteUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ id: userId });
            if (!user)
                throw new Error(`User with ID ${userId} not found`);
            yield User_1.default.deleteOne({ id: userId });
            yield Post_1.default.deleteMany({ userId });
            yield Comment_1.default.deleteMany({ postId: userId });
            return { message: `User ${userId} and related data deleted` };
        });
    }
    // Get user and their posts with comments
    static getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ id: userId });
            if (!user)
                throw new Error("User not found");
            const posts = yield Post_1.default.find({ userId });
            for (const post of posts) {
                post.set("comments", yield Comment_1.default.find({ postId: post.id }), { strict: false });
            }
            return { user, posts };
        });
    }
    // Add a new user
    static addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield User_1.default.findOne({ id: newUser.id });
            if (existingUser)
                throw new Error("User already exists");
            const user = new User_1.default(newUser);
            yield user.save();
            return user;
        });
    }
}
exports.default = UserService;
