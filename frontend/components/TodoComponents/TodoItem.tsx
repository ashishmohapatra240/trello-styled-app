import React from "react";
import { Priority, Todo } from "../types";

interface TodoItemProps extends Todo {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
  priority,
  dueDate,
  status,
  timeAgo,
  onEdit,
  onDelete,
}) => {
  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case Priority.Urgent:
        return "bg-[#FF6B6B]";
      case Priority.Medium:
        return "bg-[#FFA235]";
      case Priority.Low:
        return "bg-[#0ECC5A]";
      default:
        return "";
    }
  };

  return (
    <article className="flex flex-col px-3.5 py-3.5 mt-4 w-full text-sm font-medium rounded-lg border border-solid bg-stone-50 border-neutral-200 text-zinc-600">
      <h3 className="text-base">{title}</h3>
      <p className="mt-1 text-neutral-500">{description}</p>
      <span
        className={`px-2 py-1.5 text-xs text-white whitespace-nowrap rounded-lg text-center ${getPriorityColor(
          priority
        )}`}
      >
        {priority}
      </span>

      <div className="flex gap-2 mt-3.5 font-semibold whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4d1c50748b642ccab5c6938e731a85c5787396a8887b2e021a0696e0fffed2e?apiKey=9c69169191d441fda0ffa037dc60254e"
          className="shrink-0 w-6 aspect-square"
          alt=""
        />
        <time className="my-auto">{dueDate}</time>
      </div>
      <p className="mt-4 text-neutral-500">{timeAgo}</p>
      <div className="flex justify-between mt-4">
        <button onClick={() => onEdit(id)} className="text-blue-500">
          Edit
        </button>
        <button onClick={() => onDelete(id)} className="text-red-500">
          Delete
        </button>
      </div>
    </article>
  );
};

export default TodoItem;
