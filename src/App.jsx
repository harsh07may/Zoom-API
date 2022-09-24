import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/auth";
import Form from "./components/Form";
import Home from "./components/Home";
import Login from "./components/Login";

// import Navbar from "./components/Navbarbroken";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/form"
            element={
              <RequireAuth>
                <Form />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
