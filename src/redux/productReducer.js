import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where,} from "firebase/firestore";
import { db } from "../firebaseInit";

export const  handleCartThunk = createAsyncThunk(
  "products/handleCart",
  async ({ user, newCart }, thunkAPI) => {
    try {
      const q_Cart = query(
        collection(db, "carts"),
        where("uid", "==", user.uid)
      );
      const snapShot = await getDocs(q_Cart);
      if (!snapShot.empty) {
        snapShot.forEach((doc) => {
          setDoc(doc.ref, {
            uid: user.uid,
            cart: newCart,
          });
        });
      } else {
        const newDocRef = doc(collection(db, "carts"));
        await setDoc(newDocRef, {
          uid: user.uid,
          cart: newCart,
        });
      }
      return { success: true };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const handleOrderCartThunk = createAsyncThunk(
  "products/handleOrderCart",
  async ({ user, newCart }, thunkAPI) => {
    try {
      const q_Cart = query(
        collection(db, "carts"),
        where("uid", "==", user.uid)
      );
      const snapShot = await getDocs(q_Cart);

      if (!snapShot.empty) {
        snapShot.forEach((doc) => {
          if (doc.data().uid === user.uid) {
            setDoc(doc.ref, { cart: newCart }, { merge: true });
          }
        });
      } else {
        await addDoc(collection(db, "carts"), {
          uid: user.uid,
          cart: newCart,
        });
      }
      return { success: true };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const handlePurchaseThunk = createAsyncThunk(
  "products/handlePurchase",
  async ({ user, newPurchaseHistory }, thunkAPI) => {
    try {
      // Add purchase data to Firestore
      const q_Purchase = query(
        collection(db, "purchaseHistory"),
        where("uid", "==", user.uid)
      );
      const snapShot = await getDocs(q_Purchase);

      if (!snapShot.empty) {
        snapShot.forEach((doc) => {
          setDoc(doc.ref, {
            uid: user.uid,
            purchaseHistory: newPurchaseHistory,
          });
        });
      } else {
        await addDoc(collection(db, "purchaseHistory"), {
          uid: user.uid,
          purchaseHistory: newPurchaseHistory,
        });
      }

      console.log("Purchase History added");
      
      // Clear cart from Firestore
      const q_Cart = query(
        collection(db, "carts"),
        where("uid", "==", user.uid)
      );
      const snapShot_Cart = await getDocs(q_Cart);

      // Get ID of the cart
      let cartId = "";
      snapShot_Cart.forEach((doc) => {
        if (doc.data().uid === user.uid) {
          cartId = doc.id;
        }
      });

      if (cartId) {
        await deleteDoc(doc(db, "carts", cartId));
        console.log("Cart Cleared");
      }
      console.log("Purchase Successful");
      return { success: true };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const initialState = {
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle Cart
    builder
      .addCase(handleCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleCartThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(handleCartThunk.rejected, (state, action) => {
        state.loading = false;
        console.log("Error: ", action.payload);
        state.error = action.payload;
      });

    // Handle Order Cart    
    builder
      .addCase(handleOrderCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleOrderCartThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(handleOrderCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle Purchase
    
    builder
      .addCase(handlePurchaseThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handlePurchaseThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(handlePurchaseThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
export const productSelector = (state) => state.products;
