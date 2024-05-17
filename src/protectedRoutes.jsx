import React, { useContext, useEffect } from "react";
import userContext from "./context/user/userContext";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProtectedRoutes() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  // navigate work , after page is loaded
  // so we need to use useEffect to navigate before page is loaded
  useEffect(() => {
    if (!user) {
      toast.error("You need to login to access this page");
      navigate("/signin");
    }
  });

  return <Outlet />;
}
