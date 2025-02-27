import React from "react";

import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginSucces } from "../redux/actions";



const Login = () => {
  const dispatch = useDispatch()
  const handleSignUp = async () => {
    dispatch(loginSucces())
  };
  return (
    <div>
      <Button onClick={handleSignUp}>Signin with Google</Button>
    </div>
  );
};

export default Login;
