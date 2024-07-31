"use client"
import React from "react";
import SidebarLayout from "@/components/SidebarComponents/SidebarLayout";
import Dashboard from "@/Dashboard";
import TaskBoard from "@/components/TaskBoard";
import { Priority, Todo } from "@/components/types";


export default function signIn() {
  const userName = "Joe";

  const todos: Todo[] = [
    {
      id: 1,
      title: "Complete project report",
      description: "Finish the final report by EOD",
      priority: Priority.Urgent,
      dueDate: "2024-08-01",
      status: "todo",
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Discuss project milestones",
      priority: Priority.Medium,
      dueDate: "2024-08-02",
      status: "in-progress",
      timeAgo: "4 hours ago",
    },
    {
      id: 3,
      title: "Code review",
      description: "Review the new feature implementation",
      priority: Priority.Low,
      dueDate: "2024-08-03",
      status: "under-review",
      timeAgo: "6 hours ago",
    },
    {
      id: 4,
      title: "Deploy to production",
      description: "Deploy the latest changes to production",
      priority: Priority.Urgent,
      dueDate: "2024-08-04",
      status: "completed",
      timeAgo: "1 day ago",
    },
  ];

  const handleEdit = (id: number) => {
    console.log(`Editing todo with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting todo with id: ${id}`);
  };

  return (
    <div className="flex">
      <SidebarLayout />
      <div className="flex-1 px-8 py-8">
        <Dashboard userName={userName} />
        <TaskBoard todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}