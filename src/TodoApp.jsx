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

  const handleChangeCheckbox = (event, id) => {
    const isCompleted = event.target.checked;
    const updatedTodoList = todoList.map((item) =>
      item.id === id ? { ...item, status: isCompleted } : item
    );

    setTodoList(updatedTodoList);
  };

  const handleRemove = (event, id) => {
    event.preventDefault();
    const removeTodoItem = todoList.filter(item => item.id !== id);
    setTodoList(removeTodoItem)
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
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
