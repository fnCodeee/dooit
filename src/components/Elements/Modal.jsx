"use client";

import { useTask } from "@/hooks/useTask.jsx";
import taskService from "@/services/task.service.js";
import { useEffect, useState } from "react";

export default function Modal({ onClose }) {
  const [show, setShow] = useState(false);
  const { tasks, fetchTask } = useTask()
  const [isLoading, setIsLoading] = useState(false);
  const [formTask, setFormTask] = useState({
    title: "",
    category: "General",
    priority: "",
    startFrom: "",
    categoryIcon: "globe-alt",
  });
  const priorities = ["low", "medium", "high"];

  const uniqueCategory = [...new Set(tasks.map((t) => t.category))];
  console.log(uniqueCategory);
  const handleChange = (e) => {
    setFormTask({
      ...formTask,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setShow(true);
  }, []);

  const handlePriority = (value) => {
    setFormTask({
      ...formTask,
      priority: value,
    });
  };

  // console.log("SUBMIT DATA:", formTask)  ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await taskService.create(formTask);
      await fetchTask();
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA ERROR:", error.response?.data);
      console.log("FULL ERROR:", error);
    } finally {
      setIsLoading(false);
    }
  };


  // console.log("SUBIMIT FORM:", formTask);
  return (
    <section className=" h-screen py-4 fixed z-20 pl-6 w-full flex bg-black/50">
      <form
        onSubmit={handleSubmit}
        className={`w-104 px-6 rounded-2xl bg-white flex flex-col justify-between h-full py-6 transform transition-all duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 ">
            <i className="bx bx-calendar text-blue1 text-3xl" />
            <h1 className="font-semibold text-3xl">Create Task</h1>
          </div>
          <button className="cursor-pointer" type="button" onClick={onClose}>
            <i className="bx bx-x text-2xl text-abu-one" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col gap-6">
          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">
              Task Name <span className="text-red-500">*</span>
            </h1>
            <input
              className="focus:outline-blue1 py-2 w-full bg-s2-blue rounded-xl px-2.5"
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Enter Task Name"
            />
          </div>

          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Start From</h1>
            <input
              className="focus:outline-blue1 py-2 bg-s2-blue rounded-xl px-2.5"
              placeholder="Enter Task Name"
              type="datetime-local"
              name="startFrom"
              onChange={handleChange}
            />
          </div>

          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Priority</h1>
            <div className="flex justify-between gap-3">
              {priorities.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    handlePriority(p);
                  }}
                  className={`w-full py-2 rounded-xl border transition ${
                    formTask.priority === p
                      ? "bg-blue1 text-white border-blue1"
                      : "bg-s2-blue border-abu-one"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Categories</h1>
            <select
              className="w-full py-2.5 px-2.5 rounded-xl border-abu-one border bg-s2-blue"
              name="category"
              value={formTask.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select category
              </option>

              {uniqueCategory.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/*  */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="text-lg cursor-pointer hover:bg-abu-one border border-abu-one px-6 py-3 rounded-xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="text-lg text-white bg-blue1 py-3 w-full rounded-xl"
          >
            {isLoading ? "Loading..." : "save"}
          </button>
        </div>
      </form>
    </section>
  );
}
