import React, { useState } from "react";

export default function TodoItem({ todo, handleChangeCheckbox, handleRemove, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEditChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    handleEdit(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          onChange={(event) => handleChangeCheckbox(event, todo.id)}
          checked={todo.status}
        />
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex">
            <input
              type="text"
              value={newTask}
              onChange={handleEditChange}
              className="border border-gray-300 rounded py-1 px-2 mr-2"
            />
            <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
              Save
            </button>
          </form>
        ) : (
          <p
            onClick={() => !todo.status && setIsEditing(true)}
            className={`text-gray-800 cursor-pointer ${todo.status ? "line-through" : ""}`}
          >
            {todo.task}
          </p>
        )}
      </div>
      <div className="space-x-2">
        {!todo.status ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : null}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={(event) => handleRemove(event, todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
