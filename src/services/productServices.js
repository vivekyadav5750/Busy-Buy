import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseInit";

export class ProductServices {
  constructor() {
    this.db = db;

    this.docRef_Cart = doc(collection(this.db, "carts"));
    this.docRef_Purchase = doc(collection(db, "purchaseHistory"));
  }

  async handleCart(user, newCart) {
    try {
      const q_Cart = query(
        collection(this.db, "carts"),
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
        await setDoc(this.docRef_Cart, {
          uid: user.uid,
          cart: newCart,
        });
      }
      return { success: true, error: null };
    } catch (error) {
      console.log(error);
      return { success: false, error };
    }
  }

  async handleOrderCart(user, newCart) {
    try {
      const q_Cart = query(
        collection(this.db, "carts"),
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
        addDoc(collection(db, "carts"), {
          uid: user.uid,
          cart: newCart,
        });
      }
      return { success: true, error: null };
    } catch (error) {
      console.log(error);
      return { success: false, error };
    }
  }

  async handlePurchase(user, newPurchaseHistory) {
    try {
      //1. add purchase data to firestore
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
        addDoc(collection(db, "purchaseHistory"), {
          uid: user.uid,
          purchaseHistory: newPurchaseHistory,
        });
      }

      // 2. clear cart from firestore
      const q_Cart = query(
        collection(db, "carts"),
        where("uid", "==", user.uid)
      );
      const snapShot_Cart = await getDocs(q_Cart);

      // get id of the cart
      let cartId = "";
      snapShot_Cart.forEach((doc) => {
        if (doc.data().uid === user.uid) {
          cartId = doc.id;
        }
      });
      await deleteDoc(doc(db, "carts", cartId));
      return { success: true, error: null };
    } catch (error) {
      console.log(error);
      return { success: false, error };
    }
  }
}

const productServices = new ProductServices();
export default productServices;
