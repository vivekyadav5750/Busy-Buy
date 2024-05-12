import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import { useContext } from "react";
import { useValue, itemContext } from "../Auth/hook";

export default function Navbar() {
  // const {userLogin, setUserLogin} = useValue();
  // const { userLogin } = useContext(itemContext);
  const  userLogin  = true
  console.log(userLogin);

  return (
    <>
      <nav className="h-20 bg-gray-200 flex px-4 items-center justify-between font-mono pb-4  ">
        <NavLink to="/">
          <h1 className="text-2xl text-customPurple font ml-12 cursor-pointer">
            Busy Buy
            {/* <span className="text-2xl text-orange-800"> Busy Buy </span> */}
          </h1>
        </NavLink>

        <ul className="flex space-x-8 font-semibold mr-14">
          <NavLink to="/">
            <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
              <FaHome size={24} className="text-orange-600 " />
              <span className="text-xl text-customPurple"> Home</span>
            </li>
          </NavLink>

          {userLogin && (
            <NavLink to="/myorder">
              <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
                <BsHandbag size={24} className="text-orange-800 " />
                <span className="text-xl text-customPurple"> My orders</span>
              </li>
            </NavLink>
          )}

          {userLogin && (
            <NavLink to="/cart">
              <li className="flex space-x-2 hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
                <GiShoppingCart size={25} className="text-orange-800 " />
                <span className="text-xl text-customPurple"> Cart</span>
              </li>
            </NavLink>
          )}

          <NavLink to="/signin">
            <li className="flex space-x-2  hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
              <VscSignIn size={24} className="text-green-800" />
              <span className="text-xl text-customPurple">SignIN</span>
            </li>
          </NavLink>

          {userLogin && (
            <NavLink to="/signin">
              <li className="flex space-x-2  hover:bg-white hover:text-orange-600  rounded-md cursor-pointer">
                <VscSignOut size={24} className="text-red-700" />
                <span className="text-xl text-customPurple">Logout</span>
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
