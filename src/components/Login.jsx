import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "./auth";
import { Button } from "antd";

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    if (searchParams != "") {
      auth.login(searchParams);
      console.log(code);
      navigate("/", { replace: true });
    }
  }, [searchParams]);


  return (
    <div>
      <Button href="https://zoom.us/oauth/authorize?response_type=code&client_id=sT4WUy87Tm2GZ2RF1YlM1g&redirect_uri=http://localhost:5173/login">
        Sign Up
      </Button>
    </div>
  );
};

export default Login;
