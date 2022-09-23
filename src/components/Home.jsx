import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "antd/dist/antd.css";
import "./Home.css";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div className="Main">
        <div className="content">
          <h2>
            <strong> ZoomTek </strong> Scheduler
          </h2>
          <p>
            Whether you’re hosting webinars, virtual conferences, online
            meetings, telehealth appointments, or virtual happy hours, you can
            schedule times or collect new registrants through ZoomTek and sync
            them to Zoom with our free Scheduler!
          </p>
        </div>
      </div>

      {auth.user && <Button onClick={handleLogout}>Logout</Button>}
    </>
  );
};

export default Home;
