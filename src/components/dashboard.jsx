"use client";
import { useEffect, useState } from "react";
import Dummy from "./Elements/Dummy.jsx";
import Todo from "./Elements/Todo.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";
import taskService from "@/services/task.service.js";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTask = async () => {
    try {
      const data = await taskService.getAll();
      setTasks(data.data);
      console.log("fetch", data);
    } catch (error) {
      console.error("gagal ambil data!", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);
  console.log("console tasks after useEffect", tasks)

  // VIEW
  return (
    <DashboardLayout>
      {loading ? (
        <div className="w-full h-4/6 flex items-center justify-center mt-12 text-abu-one">
          <p>Tunggu bentar nyed . . . . </p>
        </div>
      ) :   tasks.length == 0 ? (
        <div className="w-full h-4/6 flex items-center justify-center mt-12 text-abu-one">
          <p>Task is not available</p>
        </div>
      ) : (
        tasks.map((value) => (
          <Todo
            key={value._id}
            title={value.title}
            category={value.category}
            priority={value.priority}
            startFrom={value.startFrom}
            deadline={value.deadline}
          />
        ))
      )}
      {/* <Todo /> */}
    </DashboardLayout>
  );
}
