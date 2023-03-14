// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfkJ-7ZnHGVCXJTc2pCqMR81zuX6KTfJ8",
  authDomain: "react-firebase-auth-c745c.firebaseapp.com",
  projectId: "react-firebase-auth-c745c",
  storageBucket: "react-firebase-auth-c745c.appspot.com",
  messagingSenderId: "1000550742352",
  appId: "1:1000550742352:web:a4778eadf6203a8a021455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
