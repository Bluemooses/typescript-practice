import { Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [signUpData, setSignUpData] = useState({
    userName: "",
    password: "",
  });

  return (
    <>
      <FormControl size="sm" id="login">
        <FormLabel>Login</FormLabel>
        <Input
          onChange={(event) => (signUpData.userName = event.target.value)}
          placeholder="Email Address"
        />
        <Input
          onChange={(event) => (signUpData.password = event.target.value)}
          placeholder="Password"
        />
        <Button
          onClick={() => {
            console.log(
              "click",
              "username",
              signUpData.userName,
              "password",
              signUpData.password
            );
          }}
        >
          Login
        </Button>
      </FormControl>

      <Text as="i" fontSize="xs">
        Not a member? <Button size="xs">Register</Button>
      </Text>
    </>
  );
};

export default Login;
