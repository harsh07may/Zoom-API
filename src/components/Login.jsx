import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState("Harsh");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    auth.login(user);
    navigate("/profile", { replace: true });
  };

  return (
    <div>
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default Login;
