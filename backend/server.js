const express = require("express");
const cors = require("cors");
const Todo = require("./model/Todo");
require("dotenv").config();
const connectDB = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Adding a todo
app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo({ text: req.body.text });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Deleting a todo with id given as param
app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Updating a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text, completed: req.body.completed },
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Starting Server at PORT
app.listen(process.env.PORT, () => {
  console.log("Server running on http://localhost:5000");
});
