import { Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <FormControl size="sm" id="login">
        <FormLabel>Login</FormLabel>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Button>Login</Button>
      </FormControl>

      <Text as="i" fontSize="xs">
        Not a member? <Button size="xs">Register</Button>
      </Text>
    </>
  );
};

export default Login;
