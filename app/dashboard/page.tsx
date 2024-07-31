"use client";
import React, { useState } from 'react';
import SidebarLayout from '@/components/SidebarComponents/SidebarLayout';
import Dashboard from '@/Dashboard';
import TaskBoard from '@/components/TaskBoard';
import { Priority, Todo } from '@/components/types';

export default function DashboardLayout() {
  const userName = 'Joe';

  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Complete project report',
      description: 'Finish the final report by EOD',
      priority: Priority.Urgent,
      dueDate: '2024-08-01',
      status: 'todo',
      timeAgo: '2 hours ago',
    },
    {
      id: 2,
      title: 'Team meeting',
      description: 'Discuss project milestones',
      priority: Priority.Medium,
      dueDate: '2024-08-02',
      status: 'in-progress',
      timeAgo: '4 hours ago',
    },
    {
      id: 3,
      title: 'Code review',
      description: 'Review the new feature implementation',
      priority: Priority.Low,
      dueDate: '2024-08-03',
      status: 'under-review',
      timeAgo: '6 hours ago',
    },
    {
      id: 4,
      title: 'Deploy to production',
      description: 'Deploy the latest changes to production',
      priority: Priority.Urgent,
      dueDate: '2024-08-04',
      status: 'completed',
      timeAgo: '1 day ago',
    },
  ]);

  const handleEdit = (id: number) => {
    console.log(`Editing todo with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting todo with id: ${id}`);
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

    movedItem.status = destination.droppableId;
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

  return (
    <div className="flex">
      <SidebarLayout />
      <div className="flex-1 px-8 py-8">
        <Dashboard userName={userName} />
        <TaskBoard
          todos={todos}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDragEnd={handleOnDragEnd}
        />
      </div>
    </div>
  );
}
