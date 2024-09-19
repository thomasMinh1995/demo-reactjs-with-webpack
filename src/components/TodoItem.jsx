import React from "react";

export default function TodoItem({ todo }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <p className="text-gray-800">{todo.task}</p>
      </div>
      <div className="space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Update
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Remove
        </button>
      </div>
    </div>
  );
}
