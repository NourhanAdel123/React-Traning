import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <aside className="w-60 p-4 bg-gray-200 h-screen flex flex-col gap-4">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </aside>
      <main className="p-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
