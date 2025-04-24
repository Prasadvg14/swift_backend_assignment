"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const commentSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true, required: true },
    postId: { type: Number, required: true },
    name: String,
    email: String,
    body: String
});
exports.default = mongoose_1.default.model("Comment", commentSchema);
