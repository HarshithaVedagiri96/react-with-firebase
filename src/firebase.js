// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4LVr0xmn9ow4_tO8x4sVR9RqnmkRVLHM",
  authDomain: "auth-development-7b748.firebaseapp.com",
  projectId: "auth-development-7b748",
  storageBucket: "auth-development-7b748.appspot.com",
  messagingSenderId: "601580506380",
  appId: "1:601580506380:web:dd61e22c4aa1e938c18d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;