import React from "react";
import "./Navbar.css";
import ZoomTek from "../assets/ZoomTek.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { Button } from "antd";

function Navbar() {
  const auth = useAuth();
  const navStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <header>
      <figure className="brand">
        <img src={ZoomTek} alt="" />
      </figure>
      <nav className="menu">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="menu-icon">
          <i className="fa fa-bars"></i>
        </label>
        <ul>
          <NavLink to="/" style={navStyles} end>
            <li>Home</li>
          </NavLink>

          <NavLink to="/profile" style={navStyles}>
            <li>Events</li>
          </NavLink>

          <NavLink to="/form" style={navStyles}>
            <li>Create Events</li>
          </NavLink>
        </ul>

        <ul className="profile">
          {!auth.user ? (
            <NavLink to="/login" style={navStyles}>
              <li>Login</li>
            </NavLink>
          ) : (
            <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
