import React from "react";
import TodoItem from "./components/TodoItem";

export default function TodoApp() {
  const todoList = [
    {
      id: 1,
      task: "Buy groceries",
      status: "not-complete",
    },
    {
      id: 2,
      task: "Walk the dog",
      status: "complete",
    },
    {
      id: 3,
      task: "Finish project report",
      status: "not-complete",
    },
    {
      id: 4,
      task: "Read a book",
      status: "complete",
    },
    {
      id: 5,
      task: "Exercise",
      status: "not-complete",
    },
  ];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <div className="space-y-2">
        {todoList.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
}
