import { configureStore } from "@reduxjs/toolkit";
import {productReducer} from "./redux/productReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
