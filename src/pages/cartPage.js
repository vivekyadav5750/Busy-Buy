import CartPage from "../components/cart";
import { useContext, useEffect } from "react";
import userContext from "../context/user/userContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import productServices from "../services/productServices.js";

export default function Cart() {
  const { user, cart, setCart, purchaseHistory,  } = useContext(userContext);
  console.log(cart);

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
    const {success, error} = await productServices.handleCart(user, newCart);
    if (!success) {
      toast.error("Error to update cart!!");
      return;
    }
    toast.success("Cart Updated!!");

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
    const {success, error} = await productServices.handlePurchase(user, newPurchaseHistory);
    if (!success) {
      toast.error("Error to purchase!!");
      return;
    }
    toast.success("Purchase Successful!!");
    // setCart([]);
    // setPurchaseHistory(newPurchaseHistory);
  }

  return (
    <CartPage
      handleOrderCart={handleOrderCart}
      handlePurchase={handlePurchase}
    />
  );
}
