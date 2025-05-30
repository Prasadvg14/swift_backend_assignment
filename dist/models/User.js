"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true, required: true },
    name: String,
    username: String,
    email: String,
    phone: String,
    website: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String
        }
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
});
exports.default = mongoose_1.default.model("User", userSchema);
