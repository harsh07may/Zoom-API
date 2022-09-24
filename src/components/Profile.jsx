import { Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "./Profile.css";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="bg">
      Welcome back {auth.user} !<Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Profile;
