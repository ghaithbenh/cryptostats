import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../api/users.api";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LoginForm from "../components/Auth/Login-form/Login-Form.component";
import { selectCurrentUser, setAuthState } from "../slices/auth.slice";

const LoginPage: React.FC = () => {
  const { data: user } = useGetUserQuery(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(setAuthState({ user }));
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
