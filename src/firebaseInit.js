import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLyIkxarSkHJzaYW4WR8VKK7iRkiijgb0",
  authDomain: "busy-buy-f010f.firebaseapp.com",
  projectId: "busy-buy-f010f",
  storageBucket: "busy-buy-f010f.appspot.com",
  messagingSenderId: "987500738168",
  appId: "1:987500738168:web:be1859f8a29c4604931f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);
export default app;

const auth = getAuth(app);

// name export for auth and db
export { auth, db };
