// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSYnB2oxRFxgWEw6yjYZzLobzpSicMT-4",
  authDomain: "todoapp-f9df2.firebaseapp.com",
  projectId: "todoapp-f9df2",
  storageBucket: "todoapp-f9df2.appspot.com",
  messagingSenderId: "270398590347",
  appId: "1:270398590347:web:f4f9b8b78af5fecdbf738e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)