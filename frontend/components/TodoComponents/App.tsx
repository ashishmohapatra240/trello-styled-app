import React, { useState } from "react";
import TaskBoard from "../TaskBoard";
import { Priority, Status, Todo } from "../types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Implement User Authentication",
      description: "Develop and integrate user authentication using email and password.",
      priority: Priority.Urgent,
      dueDate: "2024-08-15",
      status: Status.Todo,
      timeAgo: "Just now",
    },
  ]);

  const handleEdit = (id: number) => {
    // Implement edit functionality
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // If dropped in the same place
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn = todos.filter(todo => todo.status === source.droppableId);
    const destinationColumn = todos.filter(todo => todo.status === destination.droppableId);
    const [movedItem] = sourceColumn.splice(source.index, 1);

    movedItem.status = destination.droppableId as Status;
    destinationColumn.splice(destination.index, 0, movedItem);

    const newTodos = todos.map(todo => {
      if (todo.id === movedItem.id) {
        return movedItem;
      } else if (todo.status === source.droppableId) {
        return sourceColumn.find(item => item.id === todo.id) || todo;
      } else if (todo.status === destination.droppableId) {
        return destinationColumn.find(item => item.id === todo.id) || todo;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleCreateTaskClick = (status: Status) => {
    // Implement create task functionality
  };

  return (
    <main>
      <TaskBoard
        todos={todos}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDragEnd={handleOnDragEnd}
        onCreateTaskClick={handleCreateTaskClick}
      />
    </main>
  );
};

export default App;
