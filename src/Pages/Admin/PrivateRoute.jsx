// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Dashboard from "./Dashboard";

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Dashboard /> : <Navigate to="/login" />;
};

export default PrivateRoute;
