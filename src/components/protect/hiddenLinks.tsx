
import { useLoginStatus } from "../../hooks/useLoginStatus";
import { LoginProps, LogoutProps } from '../../types/types';
import React from "react";

export const ShowOnLogin = ({ children }: LoginProps) => {
  const isLoggedIn = useLoginStatus();

  return isLoggedIn ? <>{children}</> : null;
};

export const ShowOnLogout = ({ children }: LogoutProps) => {
  const isLoggedIn = useLoginStatus();

  return !isLoggedIn ? <>{children}</> : null;
};
