"use client";
import React, { useState } from 'react';
import SidebarLayout from '@/components/SidebarComponents/SidebarLayout';
import Dashboard from '@/components/DashboardUElements/Dashboard';
import TaskBoard from '@/components/TaskBoard';
import TaskDetails from '@/components/TaskDetailsComponents/TaskDetails';
import { Priority, Status, Todo } from '@/components/types';

export default function DashboardLayout() {
  const userName = 'Joe';

  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Complete project report',
      description: 'Finish the final report by EOD',
      priority: Priority.Urgent,
      dueDate: '2024-08-01',
      status: Status.Todo,
      timeAgo: '2 hours ago',
    },
    {
      id: 2,
      title: 'Team meeting',
      description: 'Discuss project milestones',
      priority: Priority.Medium,
      dueDate: '2024-08-02',
      status: Status.InProgress,
      timeAgo: '4 hours ago',
    },
    {
      id: 3,
      title: 'Code review',
      description: 'Review the new feature implementation',
      priority: Priority.Low,
      dueDate: '2024-08-03',
      status: Status.UnderReview,
      timeAgo: '6 hours ago',
    },
    {
      id: 4,
      title: 'Deploy to production',
      description: 'Deploy the latest changes to production',
      priority: Priority.Urgent,
      dueDate: '2024-08-04',
      status: Status.Finished,
      timeAgo: '1 day ago',
    },
  ]);

  const [isTaskDetailsVisible, setIsTaskDetailsVisible] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<Status>(Status.Todo);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (id: number) => {
    console.log(`Editing todo with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting todo with id: ${id}`);
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

  const handleCreateTaskClick = (status: Status) => {
    setCurrentStatus(status);
    setIsTaskDetailsVisible(true);
  };

  const handleCloseTaskDetails = () => {
    setIsTaskDetailsVisible(false);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleAddTask = (task: { title: string; description: string; priority: Priority; dueDate: string; status: Status }) => {
    const newTask: Todo = {
      ...task,
      id: todos.length + 1,
      timeAgo: 'Just now',
    };
    setTodos([...todos, newTask]);
    setIsTaskDetailsVisible(false);
  };

  const filteredTodos = todos.filter(todo => 
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <SidebarLayout onCreateTaskClick={() => handleCreateTaskClick(Status.Todo)} />
      <div className="flex-1 flex flex-col overflow-y-auto p-8">
        <Dashboard
          userName={userName}
          onCreateTaskClick={() => handleCreateTaskClick(Status.Todo)}
          todos={filteredTodos}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDragEnd={handleOnDragEnd}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className={`fixed inset-0 bg-black opacity-50 z-10 ${isTaskDetailsVisible ? 'block' : 'hidden'}`} onClick={handleCloseTaskDetails}></div>
      <div className={`fixed top-0 right-0 h-full transform transition-transform duration-300 ${isTaskDetailsVisible ? 'translate-x-0' : 'translate-x-full'} ${isFullscreen ? 'w-full' : 'max-w-[670px]'} z-20 overflow-y-auto`}>
        <TaskDetails
          title="New Task"
          onAddTask={handleAddTask}
          status={currentStatus}
          onClose={handleCloseTaskDetails}
          onToggleFullscreen={handleToggleFullscreen}
        />
      </div>
    </div>
  );
}
