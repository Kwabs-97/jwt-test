"use client";
import React from "react";
import Sidebar from "./components/sidebar";

function DashboardLayout({ children }) {
  return (
    <section className="flex flex-row">
      <Sidebar />
      {children}
    </section>
  );
}

export default DashboardLayout;
