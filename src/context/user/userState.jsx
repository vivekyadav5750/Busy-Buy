import { useEffect, useState } from "react";
import userContext from "./userContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseInit";

const UserState = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  // purchase history
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUser(null);
        return;
      }
      // setUser(user);
      setUser({
        uid: user.uid,
        email: user.email,
      });
      // console.log("from user state user is: ", user);
    });
  }, []);

  return (
    <userContext.Provider
      value={{ user, cart, setCart, purchaseHistory, setPurchaseHistory }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserState;
