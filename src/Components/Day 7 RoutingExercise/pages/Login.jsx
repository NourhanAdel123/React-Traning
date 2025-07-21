import React, { useState } from "react";
import { useAuth } from "../../Day 7 RoutingExercise/pages/Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(auth); // see if it's undefined

  const redirectPath = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
    // console.log("User logged in:", auth.user);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user || ""}
        className="border p-2"
      />
      <button onClick={handleLogin} className="border p-2">
        Login
      </button>
    </div>
  );
};

export default Login;
