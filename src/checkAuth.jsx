import React from "react";
import { Outlet } from "react-router-dom";

export default function CheckAuth() {
  return (
    <div>
      <h1>Check Auth</h1>
      <Outlet />
    </div>
  );
}
