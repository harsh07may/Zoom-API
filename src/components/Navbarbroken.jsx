import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import Logo from "../assets/ZoomTek.svg";
import "./Navbarbroken.css";

const Navbar = () => {
  const auth = useAuth();
  return (
    <div>
      <nav className="primary-nav">
        <img className="nav-logo" src={Logo} alt="logo" />

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
