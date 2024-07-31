import React from "react";
import TodoList from "./TodoComponents/TodoList";
import { Todo } from "./types";

interface TaskBoardProps {
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ todos, onEdit, onDelete }) => {
  const columns = [
    { name: "To do", status: "todo" },
    { name: "In progress", status: "in-progress" },
    { name: "Under review", status: "under-review" },
    { name: "Finished", status: "completed" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {columns.map((column) => (
        <div key={column.status} className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">{column.name}</h2>
          <TodoList
            todos={todos.filter((todo) => todo.status === column.status)}
            onEdit={onEdit}
            onDelete={onDelete}
          />
          <button className="mt-4 w-full py-2 bg-black text-white rounded-lg">
            Add new
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
