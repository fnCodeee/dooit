"use client";

import taskService from "@/services/task.service.js";
import { createContext, useContext, useEffect, useState } from "react";

// arrow func rafce
// state tasks, loading
// arrow fetch with tryfinally
// try: fetch variable

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState();
  const [loading, setLoading] = useState(true);
  const fetchTasks = async () => {
    try {
      const res = await taskService.getAll();
      setTasks(res.data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        loading,
        fetchTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
