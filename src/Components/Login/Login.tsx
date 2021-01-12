import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    async function fetchUser() {
      const response = await axios.get("/api/user", config);
      const userObject = response.data;
      setUser(userObject);
    }
    fetchUser();
  }, [user]);
  return (
    <div>
      <p>Login page</p>
    </div>
  );
};

export default Login;
