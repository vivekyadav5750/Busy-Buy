import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { formatFirebaseResponseError } from "../utils/formatFirebaseResponseError";
import { initializeApp } from "firebase/app";

export class AuthService {
  auth;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCLyIkxarSkHJzaYW4WR8VKK7iRkiijgb0",
      authDomain: "busy-buy-f010f.firebaseapp.com",
      projectId: "busy-buy-f010f",
      storageBucket: "busy-buy-f010f.appspot.com",
      messagingSenderId: "987500738168",
      appId: "1:987500738168:web:be1859f8a29c4604931f8d",
    };
    const app = initializeApp(firebaseConfig);

    this.auth = getAuth(app);
  }

  // sign up with email and password
  async signup(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return { userCredential, error: null };
    } catch (error) {
      //* Modify Error message
      error.message = formatFirebaseResponseError(error?.code);

      return {
        userCredential: null,
        error,
      };
    }
  }

  // sign in with email and password
  async signin(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return { userCredential, error: null };
    } catch (error) {
      //* Modify Error message
      error.message = formatFirebaseResponseError(error?.code);

      return {
        userCredential: null,
        error,
      };
    }
  }

  // sign out
  async logout() {
    try {
      await signOut(this.auth);

      return { error: null };
    } catch (error) {
      //* Modify Error message
      error.message = formatFirebaseResponseError(error?.code);

      return {
        error,
      };
    }
  }
}

const authService = new AuthService();

export default authService;
