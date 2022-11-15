// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3s4ene7XDDeWLnwg4aX-sFPOeIhwYJkg",
  authDomain: "chatyaaa-f6cab.firebaseapp.com",
  projectId: "chatyaaa-f6cab",
  storageBucket: "chatyaaa-f6cab.appspot.com",
  messagingSenderId: "458633951074",
  appId: "1:458633951074:web:7fe144da349b9d10419e3b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)