import CartPage from "../components/cart";
import { useContext } from "react";
import userContext from "../context/user/userContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import productServices from "../services/productServices.js";

import { useSelector, useDispatch } from "react-redux";
import { handleOrderCartThunk, handlePurchaseThunk } from "../redux/productReducer";
import { productSelector } from "../redux/productReducer";
import { set } from "firebase/database";

export default function Cart() {
  const { user, cart, setCart, purchaseHistory,  } = useContext(userContext);
  console.log(cart);

  const dispatch = useDispatch();
  const {loading, error} = useSelector(productSelector);
  console.log("Product Selector", loading, error);

  async function handleOrderCart(type, product) {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (type === "minus") {
      if (newCart[index].quantity === 1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity -= 1;
      }
    } else if (type === "plus") {
      newCart[index].quantity += 1;
    } else {
      toast.error("Removed from Cart!!");
      newCart.splice(index, 1);
    }

    // add to firestore

    dispatch(handleOrderCartThunk({user, newCart}));
    if (error) {
      toast.error("Error to update cart!!");
      return;
    }
    else{
      toast.success("Cart Updated!!");
    }

  }

  // handle purchase add to purchase history
  async function handlePurchase() {
    if (cart.length === 0) {
      toast.error("Nothing to purchase in Cart!!");
      return;
    }
    const date = new Date();
    const newPurchaseHistory = [
      ...purchaseHistory,
      {
        date: date.toLocaleDateString(),
        items: cart,
      },
    ];
    // add to firestore
    console.log("click on purchase");
    dispatch(handlePurchaseThunk({user, newPurchaseHistory}));
    if (error) {
      toast.error("Error to purchase!!");
      return;
    }
    else{
      toast.success("Purchase Successful!!");
      setCart([]);
    }
  }

  return (
    <CartPage
      handleOrderCart={handleOrderCart}
      handlePurchase={handlePurchase}
    />
  );
}
