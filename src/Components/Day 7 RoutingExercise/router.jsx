import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appoinments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import Login from "../Day 7 RoutingExercise/pages/Login";
import RequireAuth from "./pages/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "doctors", element: <Doctors /> },
      { path: "appointments", element: <Appointments /> },
      { path: "settings", element: <Settings /> },
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
