'use client';
import Dashboard from "../components/dashboard";
import SideBar from "../components/sidebar";
import { useState } from "react";

export default function Home() {
  return (
    <section className="h-full">
      <SideBar/>
      <Dashboard/>
    </section>
  );
}
