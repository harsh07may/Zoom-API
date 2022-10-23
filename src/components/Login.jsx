import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "./auth";
import { Button } from "antd";
import "./Login.css";
import img1 from "../assets/meet.jpeg";
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
      <div className="context">
        <h2>Welcome to ZoomTek</h2>
        <br />
        <div className="para">
          <p>
            Power up your conference rooms with HD video and audio
            collaboration.Get links to share,Nobody can join unless invited.
          </p>
        </div>
      </div>
      <div className="picture">
        <img src={img1} />
      </div>

      <Button
        className="click"
        href="https://zoom.us/oauth/authorize?response_type=code&client_id=nLN5_QppT3Oyckf0AGaJ7A&redirect_uri=http://localhost:5173/login"
      >
        Sign Up with Google
      </Button>
    </div>
  );
};

export default Login;
