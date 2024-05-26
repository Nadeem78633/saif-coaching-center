// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./assets/Css/app.css";

import {
  DashboardLayout,
  Error,
  Home,
  Login,
  PrivateRoute,
  Dashboard,
} from "./Pages";
import Slider1 from "./Components/Slider1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "slider", element: <Slider1 /> },
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
