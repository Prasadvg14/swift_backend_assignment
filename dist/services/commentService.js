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
exports.deleteComment = exports.getCommentsByPostId = exports.createComment = void 0;
const Comment_1 = __importDefault(require("../models/Comment"));
const createComment = (commentData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Comment_1.default.create(commentData);
});
exports.createComment = createComment;
const getCommentsByPostId = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Comment_1.default.find({ postId });
});
exports.getCommentsByPostId = getCommentsByPostId;
const deleteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Comment_1.default.deleteOne({ id: commentId });
});
exports.deleteComment = deleteComment;
