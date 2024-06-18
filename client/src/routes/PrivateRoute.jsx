import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return user ? children : <Navigate to="/dashboard" />;
};

export const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return user && user.role === "admin" ? (
    children
  ) : (
    <Navigate to="/dashboard" />
  );
};
