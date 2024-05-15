import { Outlet } from "react-router-dom";
import UserState from "./context/user/userState";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <UserState>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      <ToastContainer/>
    </UserState>
  );
}
