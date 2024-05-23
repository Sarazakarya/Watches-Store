import React from "react";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import { $user } from "../Store/Login";

export default function IsNotLogin({ children }) {
  const [auth] = useRecoilState($user);
  if (auth.isAuth) return <Navigate to={"/"} />;
  return <div>{children}</div>;
}
