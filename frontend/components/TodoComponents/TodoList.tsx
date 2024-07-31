import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
