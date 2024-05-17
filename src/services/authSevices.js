import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { formatFirebaseResponseError } from "../utils/formatFirebaseResponseError";
import { initializeApp } from "firebase/app";
import app from "../firebaseInit";

export class AuthService {
  auth;

  constructor() {
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
