import React, { useState } from "react";
import TaskBoard from "../TaskBoard";
import { Todo } from "../types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Implement User Authentication",
      description: "Develop and integrate user authentication using email and password.",
      priority: "Urgent",
      dueDate: "2024-08-15",
      status: "todo",
    },
  ]);

  const handleEdit = (id: number) => {
    // Implement edit functionality
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main>
      <TaskBoard todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
};

export default App;