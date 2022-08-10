import useLocalStorage from './use-local-storage';
import React, { useState, useContext, useEffect } from 'react';
import { Task } from '../types';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import TaskContext from '../contexts/task-store';

const useTaskStore = () => {
  const [tasks, setTasks] = useContext(TaskContext);

  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    tasks.filter((task) => !task.isComplete)[0]?.id
  );
  const focusedTask = tasks.find((task) => task.id === focusedTaskId);
  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete };
        } else {
          return task;
        }
      })
    );
  };

  useEffect(() => {
    if (focusedTask?.isComplete) {
      setFocusedTaskId(tasks.filter((task) => !task.isComplete)[0]?.id);
    }
  }, [tasks, focusedTask]);

  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };
  const addTask = (task: Pick<Task, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id: id, label: task.label, isComplete: false },
    ]);
    if (!focusedTaskId) {
      setFocusedTaskId(id);
    }
  };

  const api = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    updateTaskCompletion,
    shuffleFocusedTask,
  };

  return api;
};

export default useTaskStore;
