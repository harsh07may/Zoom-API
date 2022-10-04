import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
