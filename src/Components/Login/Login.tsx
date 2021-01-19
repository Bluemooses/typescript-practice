import { Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
  });

  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };

  const login = () => {
    const data = axios.post(
      "/api/user/login",
      { username: signUpData.username, password: signUpData.password },
      config
    );
    console.log(config);
    console.log(data);
  };

  const goToRegisterPage = () => {
    history.push("/user/register");
  };

  return (
    <>
      <FormControl size="sm" id="login">
        <FormLabel>Login</FormLabel>
        <Input
          onChange={(event) => (signUpData.username = event.target.value)}
          placeholder="Email Address"
        />
        <Input
          type="password"
          onChange={(event) => (signUpData.password = event.target.value)}
          placeholder="Password"
        />
        <Button
          onClick={() => {
            login();
            axios.post("/user/login", signUpData);
          }}
        >
          Login
        </Button>
      </FormControl>

      <Text as="i" fontSize="xs">
        Not a member?{" "}
        <Button onClick={goToRegisterPage} size="xs">
          Register
        </Button>
      </Text>
    </>
  );
};

export default LoginPage;
