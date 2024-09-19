import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

export default function TodoApp() {
  const todoListData = [
    {
      id: 1,
      task: "Buy groceries",
      status: true,
    },
    {
      id: 2,
      task: "Walk the dog",
      status: false,
    },
    {
      id: 3,
      task: "Finish project report",
      status: true,
    },
    {
      id: 4,
      task: "Read a book",
      status: true,
    },
    {
      id: 5,
      task: "Exercise",
      status: false,
    },
  ];

  const [todoList, setTodoList] = useState(todoListData);
  const [todoItem, setTodoItem] = useState("");

  const handleChangeCheckbox = (event, id) => {
    const isCompleted = event.target.checked;
    const updatedTodoList = todoList.map((item) =>
      item.id === id ? { ...item, status: isCompleted } : item
    );

    setTodoList(updatedTodoList);
  };

  const handleRemove = (event, id) => {
    event.preventDefault();
    const removeTodoItem = todoList.filter((item) => item.id !== id);
    setTodoList(removeTodoItem);
  };

  const handleChangeContent = (event) => {
    event.preventDefault();
    setTodoItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    const todoObj = {
      id: todoList.length + 1,
      task: todoItem,
      status: true,
    };

    setTodoList(todoList.concat(todoObj));
    setTodoItem("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Todo App
      </h1>

      <div className="flex justify-center mb-4">
        <form onSubmit={handleSubmit} className="w-full flex items-center">
          <input
            type="text"
            onChange={handleChangeContent}
            className="border border-gray-300 rounded-l-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md transition duration-200"
          >
            Save
          </button>
        </form>
      </div>

      <div className="space-y-2">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            handleChangeCheckbox={handleChangeCheckbox}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}
