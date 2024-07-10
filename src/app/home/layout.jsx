import React from "react";
import Sidebar from "./components/sidebar";

function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}

export default DashboardLayout;
