import { data } from "../Assets/productData.js";
import PropTypes from "prop-types";
import { useContext } from "react";
import userContext from "../context/user/userContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux
import { useDispatch, useSelector } from "react-redux";
import { handleCartThunk } from "../redux/productReducer";
import { productSelector } from "../redux/productReducer";

export default function ItemsCard({ searchText, price, category }) {
  const { user, cart } = useContext(userContext);
  const dispatch = useDispatch();
  const { loading, error } = useSelector(productSelector);

  async function handleAddToCart(product) {
    if (!user) {
      toast.info("Please Login to add to cart");
      return;
    }

    const newCart = [...cart];
    console.log(newCart);
    const index = newCart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      newCart.push({ ...product, quantity: 1 });
    } else {
      newCart[index].quantity += 1;
    }

    // add to firestore
    dispatch(handleCartThunk({ user, newCart }));
    console.log("Product Selector", loading, error);

    if (error) {
      toast.error("Error adding to cart!!");
      return;
    }
    toast.success("Added to Cart!!");
  }

  return (
    <>
      {data.map((product) => {
        if (
          product.name.toLowerCase().includes(searchText.toLowerCase()) &&
          product.price <= price &&
          (category.length === 0 || category.includes(product.category))
        ) {
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
                <p className="font-bold">{product.price}</p>

                <button
                  className="h-10 w-full p-1.5 bg-darkPurple text-lg text-white rounded-md shadow-lg shadow-slate-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        }
      })}

    </>
  );
}

ItemsCard.propTypes = {
  searchText: PropTypes.string.isRequired,
};
