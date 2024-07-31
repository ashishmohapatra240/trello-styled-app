import React, { useState } from "react";
import IconButton from "./IconButton";
import CustomPropertyButton from "./CustomPropertyButton";
import { Priority, Status } from "../types";

interface TaskDetailsProps {
  title: string;
  onAddTask: (task: {
    title: string;
    description: string;
    priority: Priority;
    dueDate: string;
    status: Status;
  }) => void;
  status: Status;
  onClose: () => void;
  onToggleFullscreen: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ title, onAddTask, status, onClose, onToggleFullscreen }) => {
  const [taskTitle, setTaskTitle] = useState(title);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>(Priority.Low);
  const [dueDate, setDueDate] = useState<string>("");

  const handleAddTask = () => {
    if (taskTitle.trim() === "") return;
    onAddTask({
      title: taskTitle,
      description,
      priority,
      dueDate,
      status,
    });
    resetForm();
  };

  const resetForm = () => {
    setTaskTitle("");
    setDescription("");
    setPriority(Priority.Low);
    setDueDate("");
  };

  return (
    <main className="flex flex-col pt-4 pb-20 bg-white min-h-screen">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 my-auto">
            <IconButton
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eb210958d0a9ab380b2a1ff9c5a0e9d36129be76a5cf1e9d3b9a1880fa46119?apiKey=9c69169191d441fda0ffa037dc60254e"
              alt="Close"
              onClick={onClose}
            />
            <IconButton
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b6d5c3d915c4c93c4d6a239520168403ad35e561f5e1416751a1846661a3c9d?apiKey=9c69169191d441fda0ffa037dc60254e"
              alt="Fullscreen"
              onClick={onToggleFullscreen}
            />
          </div>
          <nav className="flex gap-4 text-base whitespace-nowrap text-neutral-500">
            <IconButton
              label="Share"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd48bd7ab9e3b4437119ce5324f4697e9aead0b138b83da75a72fac0888fd903?apiKey=9c69169191d441fda0ffa037dc60254e"
              alt="Share icon"
            />
            <IconButton
              label="Favorite"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74bd56b2b77deaa759b92cf5455ae524299276b2b8f4fc1daf386fb04ac9ea48?apiKey=9c69169191d441fda0ffa037dc60254e"
              alt="Favorite icon"
            />
          </nav>
        </header>
        <h1 className="mt-7 text-5xl font-semibold text-stone-300 max-md:max-w-full max-md:text-4xl">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="New Task"
            className="bg-transparent border-none outline-none w-full"
          />
        </h1>
        <section className="mt-8 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base whitespace-nowrap text-stone-500 max-md:mt-10">
                <div className="flex gap-2 items-center mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/077a58c3f191943c135dc8a82cf2b3a2d733daf6fee7e12fa03f0eeb6ad39b22?apiKey=9c69169191d441fda0ffa037dc60254e"
                    alt="Status icon"
                    className="w-5 h-5"
                  />
                  <span>Status: {status}</span>
                </div>
                <div className="flex gap-2 items-center mb-4">
                  <label htmlFor="priority" className="flex items-center gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1440ec497ffe921a0eb56f718052f1599486e66e62c2e05e0a9da3c80f983a8a?apiKey=9c69169191d441fda0ffa037dc60254e"
                      alt="Priority icon"
                      className="w-5 h-5"
                    />
                    Priority:
                  </label>
                  <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    className="border rounded p-2"
                  >
                    <option value={Priority.Urgent}>Urgent</option>
                    <option value={Priority.Medium}>Medium</option>
                    <option value={Priority.Low}>Low</option>
                  </select>
                </div>
                <div className="flex gap-2 items-center mb-4">
                  <label htmlFor="dueDate" className="flex items-center gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c912e8119ced91a7cfd5a7ed6dba7fe228ee1f19520fb8bf6eea9c779c7a6cb8?apiKey=9c69169191d441fda0ffa037dc60254e"
                      alt="Deadline icon"
                      className="w-5 h-5"
                    />
                    Deadline:
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex gap-2 items-center mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d16f093d7eb39c5deec8049b1a2d0754e0068d277b531d5e23dbb2f2fdfec627?apiKey=9c69169191d441fda0ffa037dc60254e"
                    alt="Description icon"
                    className="w-5 h-5"
                  />
                  <span>
                    Description: {description ? description : "Not selected"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col">
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded p-2 mt-2"
            placeholder="Start writing, or drag your own files here."
          />
        </div>
        <button
          onClick={handleAddTask}
          className="mt-4 p-2 bg-black text-white rounded"
        >
          Add Task
        </button>
        <CustomPropertyButton />
        <hr className="shrink-0 mt-8 h-px bg-neutral-200 max-md:max-w-full" />
      </div>
    </main>
  );
};

export default TaskDetails;
