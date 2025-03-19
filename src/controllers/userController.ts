import { Request, Response } from "express";
import logger from "../utils/loggerUtils";
import UserService from "../services/userService";

class UserController {
  // Load 10 users into DB
  static async loadUsers(req: Request, res: Response) {
    logger.info('Inside AuthController.loadUsers');

    try {
      const loadData = await UserService.loadUsersData();
      res.status(200).send(loadData);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete all users
  static async deleteAll(req: Request, res: Response) {
    try {
      const result = await UserService.deleteAllUsers();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a specific user
  static async deleteUser(req: Request, res: Response) {
    try {
      const result = await UserService.deleteUserById(Number(req.params.userId));
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get user by ID
  static async getUser(req: Request, res: Response) {
    try {
      const result = await UserService.getUserById(Number(req.params.userId));
      res.status(200).json(result);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  // Add a new user
  static async putUser(req: Request, res: Response) {
    try {
      const result = await UserService.addUser(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default UserController;
