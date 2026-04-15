import express from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.patch("/:id/toggle", toggleTodo);
router.delete("/:id", deleteTodo);

export default router;
