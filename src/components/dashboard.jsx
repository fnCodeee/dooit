
"use client"
import { useEffect, useState } from "react";
import Dummy from "./Elements/Dummy.jsx";
import Todo from "./Elements/Todo.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState("");

  const fetchTask = async () => {
    try {
      const data = await taskService.getAll();
      return data.data;
    } catch (error) {
      console.error("gagal ambil data!", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  if (loading) {
    <p>tunggu bentar nyed . . . . </p>;
  }

  return (
    <DashboardLayout>
        {tasks.map((value) => (
            <Todo key={value._id} title={value.title} category={value.category} deadline={value.deadline}/>
        ))}
        <Todo />

    </DashboardLayout>
  );
}
