export interface Todo {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  status: string;
  timeAgo: string;
}

export enum Priority {
  Urgent = 'Urgent',
  Medium = 'Medium',
  Low = 'Low'
}

export enum Status {
  Todo = 'Todo',
  InProgress = 'In Progress',
  UnderReview = 'Under Review',
  Finished = 'Finished'
}