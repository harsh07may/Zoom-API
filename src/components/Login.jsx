import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleClick = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <input value={user} type="text" onChange={handleChange} />
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default Login;
