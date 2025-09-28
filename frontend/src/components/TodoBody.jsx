import { useState } from "react";
import { Suspense } from "react";
import React from "react";
import Loading from "./Loading";
import axios from "axios";
const TodoList = React.lazy(() => import("./TodoList"));
const API=import.meta.env.VITE_API_URL

function TodoBody() {
      const [todos, setTodos] = useState([]);
      const [text, setText] = useState("");

      // Adding new todo
      const addTodo = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        axios
          .post(`${API}/todos`, { text })
          .then((res) => {
            setTodos([...todos, res.data]);
            setText("");
          })
          .catch((err) => console.error(err));
      };
    

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          TODO App
        </h1>

        {/* Form to add todo */}
        <form
          onSubmit={addTodo}
          className="flex flex-col md:flex-row gap-2 mb-6 w-full"
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo..."
            required
            className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
          />
          <button
            type="submit"
            className="w-full cursor-pointer sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mt-2 sm:mt-0"
          >
            Add
          </button>
        </form>

        {/* Rendering all todos inside suspence to give good effect */}
        <Suspense fallback={<Loading/>}>
          <TodoList todos={todos} setTodos={setTodos} API={API} />
        </Suspense>

      </div>
    </div>
  );
}

export default TodoBody;
