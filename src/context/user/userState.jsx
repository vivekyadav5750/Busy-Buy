import { useEffect, useState } from "react";
import userContext from "./userContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebaseInit";
import { collection, onSnapshot } from "firebase/firestore";

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

  useEffect(() => {
    console.log("Cartpage userEffect is: ", user);
    //get realtime data
    if (!user) {
      return;
    }
    onSnapshot(collection(db, "carts"), (snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().uid === user.uid) {
          const cartData = doc.data().cart;
          console.log('cartData',cartData);
          // check if cart is empty
          if (cartData.length === 0) {
            setCart([]);
          }
          else{
            setCart(cartData);
          }
        }
        else{
          setCart([]);
        }
      });
    });
  }, [user]);

  useEffect(() => {
    console.log("purchaseHistory userEffect is: ", user);
    //get realtime data
    if (!user) {
      return;
    }
    onSnapshot(collection(db, "purchaseHistory"), (snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().uid === user.uid) {
          const purchaseHistoryData = doc.data().purchaseHistory;
          console.log("purchaseHistoryData",purchaseHistoryData);
          setPurchaseHistory(purchaseHistoryData);
        }
      });
    });
  }, [user]);

  return (
    <userContext.Provider
      value={{
        user,
        cart,
        setCart,
        purchaseHistory,
        setPurchaseHistory,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserState;
