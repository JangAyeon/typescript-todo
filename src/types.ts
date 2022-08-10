export type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};

export type TaskProps = {
  addTask: (task: Pick<Task, 'label'>) => void;
  focusedTask?: Task;
  tasks: Task[];
  shuffleFocusedTask: () => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
};
