import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();
// Create
router.post("/users", UserController.create);
// Read
router.get("/users", UserController.findAll);
// Read
router.get("/users/:userID", UserController.findOne);
// Update
router.put("/users/:userID", UserController.update);
// Delete
router.delete("/users/:userID", UserController.destroy);

export { router };
