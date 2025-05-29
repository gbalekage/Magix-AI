"use client";

import { logout } from "@/actions/auth-actions";
import React from "react";

const LogOutBtn = () => {
  const handleLogout = async () => {
    await logout();
  };
  return (
    <span
      className="inline-block w-full cursor-pointer text-destructive"
      onClick={handleLogout}
    >
      Déconnexion
    </span>
  );
};
export default LogOutBtn;
