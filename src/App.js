// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./assets/Css/app.css";

import { DashboardLayout, Error, Home, PrivateRoute, Dashboard } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
