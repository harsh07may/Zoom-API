import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser == 200) {
      const foundUser = JSON.parse(loggedInUser);
      auth.login(foundUser);
    } else auth.logout();
  }, []);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
