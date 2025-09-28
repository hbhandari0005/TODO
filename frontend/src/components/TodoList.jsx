import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaRegCircle, FaTimes } from "react-icons/fa";

function TodoList({ todos, setTodos, API }) {
  // Deleting a todo
  const deleteTodo = (id) => {
    axios
      .delete(`${API}/todos/${id}`)
      .then(() => setTodos(todos.filter((t) => t._id !== id)))
      .catch((err) => console.error(err));
  };

  // Todo completed or not
  const toggleComplete = (id, completed) => {
    axios
      .put(`${API}/todos/${id}`, { completed: !completed })
      .then((res) => {
        setTodos(todos.map((t) => (t._id === id ? res.data : t)));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    axios
      .get(`${API}/todos`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* Rendering all todos */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            {/* Tick icon */}
            <button
              onClick={() => toggleComplete(todo._id, todo.completed)}
              className="mr-3 text-lg cursor-pointer"
            >
              {todo.completed ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaRegCircle className="text-gray-400" />
              )}
            </button>

            {/* Task content */}
            <span
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>

            {/* Delete icon */}
            <button
              onClick={() => deleteTodo(todo._id)}
              className="ml-3 cursor-pointer text-red-500 hover:text-red-700 text-lg"
            >
              <FaTimes />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
