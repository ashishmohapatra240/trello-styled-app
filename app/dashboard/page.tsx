import React from "react";
import SidebarLayout from "@/components/SidebarLayout";
import Dashboard from "@/Dashboard";

export default function signIn() {
  const userName = "Joe";

  return (
    <div className="flex">
      <SidebarLayout />
      <Dashboard userName={userName} />
    </div>
  );
}
