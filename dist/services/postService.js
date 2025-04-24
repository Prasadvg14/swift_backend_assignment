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
exports.deletePost = exports.getPostById = exports.getAllPosts = exports.createPost = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const createPost = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Post_1.default.create(postData);
});
exports.createPost = createPost;
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Post_1.default.find();
});
exports.getAllPosts = getAllPosts;
const getPostById = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Post_1.default.findOne({ id: postId });
});
exports.getPostById = getPostById;
const deletePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Post_1.default.deleteOne({ id: postId });
});
exports.deletePost = deletePost;
