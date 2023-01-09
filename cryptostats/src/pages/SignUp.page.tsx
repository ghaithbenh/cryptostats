import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../api/users.api";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import SignupForm from "../components/Auth/Signup-form/SignupForm.component";
import { setAuthState } from "../slices/auth.slice";

const SignupPage: React.FC = () => {
  const { data } = useGetUserQuery(undefined);
  const user = useAppSelector((state) => state.auth.user);
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
      <SignupForm />
    </div>
  );
};

export default SignupPage;
