import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHdekdGJINyZUbQXJDbCBW3nJWKKxu5ec",
  authDomain: "fb-helpdesk-52600.firebaseapp.com",
  projectId: "fb-helpdesk-52600",
  storageBucket: "fb-helpdesk-52600.appspot.com",
  messagingSenderId: "440222284743",
  appId: "1:440222284743:web:9ee7bfcd0f3e4d984eb7e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();
const auth = getAuth();

export { firestore, auth };
