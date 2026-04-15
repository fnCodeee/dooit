"use client"

import taskService from "@/services/task.service.js";
import { useEffect, useState } from "react";

export default function Todo(props) {
  const { key, title, category, deadline } = props;

  return (
    <section className="mt-3">
      <div className="flex bg-white w-full rounded-2xl">
        <div className="flex gap-2.5 py-3 pl-6 pr-16 bg-s2-blue justify-between rounded-l-2xl">
          {/* logo */}
          <div className="flex px-3.5 bg-blue1 rounded-2xl items-center justify-center">
            <i className="bx bx-movie-play text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold whitespace-nowrap">
              Start from
            </h1>
            <div className="flex items-center justify-between gap-1 text-abu-one">
              <i className="bx bx-clock text-lg" />
              {/* time */}
              <p className="text-sm whitespace-nowrap">08.00 am</p>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="flex items-center w-full justify-center py-3 px-16">
          <div className="w-full">
            <h1 className="text-lg font-semibold">Title/long text</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <i className="bx bx-calendar-alt text-abu-one" />
                <span className="text-abu-one text-sm">01/25/2026</span>
              </div>
              <div className="flex items-center gap-1">
                <i className="bx bx-movie-play text-abu-one" />
                <span className="text-abu-one text-sm">Category</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex px-3 py-1 gap-1 rounded-sm bg-s2-blue text-blue1 items-center justify-between">
              <i className="bx bx-alarm-check text-2xl" />
              <span>completed</span>
            </button>
            <i className="bx bx-edit text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
