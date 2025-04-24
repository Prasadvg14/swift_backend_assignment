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
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    // Load 10 users into DB
    static loadUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            loggerUtils_1.default.info('Inside AuthController.loadUsers');
            try {
                const loadData = yield userService_1.default.loadUsersData();
                res.status(200).send(loadData);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    // Delete all users
    static deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userService_1.default.deleteAllUsers();
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    // Delete a specific user
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userService_1.default.deleteUserById(Number(req.params.userId));
                res.status(200).json(result);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    // Get user by ID
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userService_1.default.getUserById(Number(req.params.userId));
                res.status(200).json(result);
            }
            catch (error) {
                res.status(404).json({ message: error.message });
            }
        });
    }
    // Add a new user
    static putUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userService_1.default.addUser(req.body);
                res.status(201).json(result);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.default = UserController;
