import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import MyOrder from "./pages/myOrder";
import Cart from "./pages/cartPage";
import Layout from "./layout";
import ProtectedRoutes from "./protectedRoutes";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signin", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      {
        path: "/",
        // This Routes will be accessible only if user is authenticated
        element: <ProtectedRoutes />,
        children: [
          { path: "/myorder", element: <MyOrder /> },
          { path: "/cart", element: <Cart /> },
        ],
      },
    ],
  },
]);
