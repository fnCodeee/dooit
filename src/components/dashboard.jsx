"use client";
import { useEffect, useState } from "react";
import Dummy from "./Elements/Dummy.jsx";
import Todo from "./Elements/Todo.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";
import taskService from "@/services/task.service.js";
import { useTask } from "@/hooks/useTask.jsx";

export default function Dashboard() {
  const { tasks, loading } = useTask()
  console.log("dari tasks: ", tasks)
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
            categoryIcon={value.categoryIcon}
          />
        ))
      )}
      {/* <Todo /> */}
    </DashboardLayout>
  );
}
