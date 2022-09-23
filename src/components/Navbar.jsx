import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import "./Navbar.css";

const Navbar = () => {
  const auth = useAuth();
  return (
    <div>
      <nav className="primary-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Create Events</NavLink>
        {!auth.user && (
          <NavLink className="Login-button" to="/login">
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
