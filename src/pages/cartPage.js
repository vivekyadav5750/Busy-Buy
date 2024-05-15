import { useContext } from "react";
import userContext from "../context/user/userContext";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Cart() {

  const { user, cart, setCart, purchaseHistory, setPurchaseHistory } = useContext(userContext);

  const handleOrderCart = (type, product) => {
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

    setCart(newCart);
  };

  // handle purchase add to purchase history
  const handlePurchase = () => {
    // add date to purchase history
    // check if cart is empty
    if (cart.length === 0) {
      console.log("Nothing to purchase in Cart!!");
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
    setPurchaseHistory(newPurchaseHistory);
    setCart([]);
    console.log(purchaseHistory);
    toast.success("Purchase Successful!!");
  };

  return (
    <>
      <div className="flex w-full gap-x-4 ">
        <div className="bg-lightPurple w-1/6 h-48 p-4 rounded-lg mt-10 m-2 space-y-8">
          {/* calculate total and show */}
          <h2 className="text-xl font-bold">
            {" "}
            Total - Rs:{" "}
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </h2>
          {/* buy now  */}
          <button
            className="h-12 w-2/3 p-1.5 bg-green-500 text-lg text-white rounded-md shadow-lg border-2 border-green-400 hover:bg-white hover:text-darkPurple"
            onClick={() => handlePurchase()}
          >
            Buy Now
          </button>
        </div>

        <div className="w-5/6  grid grid-cols-4 gap-y-8 gap-x-4 p-8">
          {/* check if cart length i 0 show no items */}

          {cart.length === 0 && (
            // <div className="bg-red-300 custom-card-shadow w-full rounded-md flex flex-col p-4 gap-y-2 justify-between">
            <h1 className="text-4xl font-bold tracking-widest text-center ">
              Cart Empty
            </h1>
            // </div>
          )}
          {cart.map((product) => {
            return (
              <div
                className="custom-card-shadow w-full rounded-md flex flex-col p-4 gap-y-2 justify-between"
                key={product.id}
              >
                <div className="space-y-2">
                  <img
                    className="w-60 h-60 rounded-sm"
                    src={product.image}
                    alt={product.category}
                  />

                  <p className="line-clamp-2">{product.name}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-row justify-between">
                    <p className="font-bold text-xl">{product.price}</p>
                    <div className="flex space-x-4 ">
                      <FaCircleMinus
                        size={22}
                        onClick={() => {
                          handleOrderCart("minus", product);
                        }}
                      />
                      <h2 className="text-xl">{product.quantity}</h2>
                      <FaCirclePlus
                        size={22}
                        onClick={() => {
                          handleOrderCart("plus", product);
                        }}
                      />
                    </div>
                  </div>

                  <button
                    className="h-12 w-full p-1.5 bg-red-600 text-lg text-white rounded-md shadow-lg border-2 border-red-600 hover:bg-white hover:text-red-600  "
                    onClick={() => {
                      handleOrderCart("remove", product);
                    }}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
