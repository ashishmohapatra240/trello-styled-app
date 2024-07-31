import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoItem from './TodoComponents/TodoItem';
import { Todo, Status } from './types';

interface TaskBoardProps {
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onDragEnd: (result: any) => void;
  onCreateTaskClick: (status: Status) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ todos, onEdit, onDelete, onDragEnd, onCreateTaskClick }) => {
  const columns = [
    { name: 'To do', status: Status.Todo },
    { name: 'In progress', status: Status.InProgress },
    { name: 'Under review', status: Status.UnderReview },
    { name: 'Finished', status: Status.Finished },
  ];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-4 gap-4 p-4">
        {columns.map(column => (
          <Droppable key={column.status} droppableId={column.status}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-100 p-4 rounded-lg"
              >
                <h2 className="text-xl font-bold mb-4">{column.name}</h2>
                {todos
                  .filter(todo => todo.status === column.status)
                  .map((todo, index) => (
                    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2"
                        >
                          <TodoItem
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            priority={todo.priority}
                            dueDate={todo.dueDate}
                            status={todo.status}
                            timeAgo={todo.timeAgo}
                            onEdit={onEdit}
                            onDelete={onDelete}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
                <button
                  className="mt-4 w-full py-2 bg-black text-white rounded-lg"
                  onClick={() => onCreateTaskClick(column.status)}
                >
                  Add new
                </button>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
