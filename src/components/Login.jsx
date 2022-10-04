import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "./auth";
import { Button } from "antd";
import axios from "axios";

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    if (searchParams != "") {
      console.log(code);

      axios
        .post("https://localhost:7010/login?code=" + code)
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("user", res.data);
            auth.login(res.data);
            navigate("/profile", { replace: true });
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div>
      <Button href="https://zoom.us/oauth/authorize?response_type=code&client_id=nLN5_QppT3Oyckf0AGaJ7A&redirect_uri=http://localhost:5173/login">
        Sign Up
      </Button>
    </div>
  );
};

export default Login;
