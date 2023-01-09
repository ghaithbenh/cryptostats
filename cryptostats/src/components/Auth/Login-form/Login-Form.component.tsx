import { Button, TextField, Link as MuiLink } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "../../../api/auth.api";
import { User } from "../../../models/user.model";
import { useAppDispatch } from "../../../app/hooks";
import { setAuthState } from "../../../slices/auth.slice";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const [login] = useLoginMutation();
  //tayet lil fun l f slice
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email) {
      setEmailErrored(true);
    } else {
      setEmailErrored(false);
    }
    if (!password) {
      setPasswordErrored(true);
    } else {
      setPasswordErrored(false);
    }
    try {
      const response = (await login({ email, password })) as { data: User };
      dispatch(setAuthState({ user: response.data }));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">CryptoStats </h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="Email"
          className="bg-white w-80"
          type="email"
          required
          helperText={emailErrored && "Please Enter A Valid Email"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={emailErrored}
        />
        <TextField
          label="Password"
          className="bg-white w-80"
          type="password"
          required
          helperText={passwordErrored && "password may not be empty"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={passwordErrored}
        />
        <Link to="/signup " className="justify-self-start self-start mt-2 ">
          <MuiLink>Don't have an account? Sign up</MuiLink>
        </Link>
      </div>
      <Button variant="contained" onClick={handleLogin}>
        <span className="p-1">Login</span>
      </Button>
    </div>
  );
};

export default LoginForm;
