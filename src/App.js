import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from './pages/home';
import Navbar from "./components/navbar";
import LoginPage from "./pages/login";
import SignupPage from "./pages/register";
import MyOrder from "./pages/myOrder";
import Cart from "./pages/cartPage";
import CustomItemContext from "./Auth/hook";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/signin", element: <LoginPage /> },
        { path: "/signup", element: <SignupPage /> },
        { path:"/myorder", element: <MyOrder />},
        { path:"/cart", element: <Cart />},
      ]
    },
    
  ]);
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
