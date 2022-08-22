// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1cUv5TADYdbqBCirby2OkR8rwDmLp4WY",
  authDomain: "app-chat-9e702.firebaseapp.com",
  projectId: "app-chat-9e702",
  storageBucket: "app-chat-9e702.appspot.com",
  messagingSenderId: "498542097741",
  appId: "1:498542097741:web:46176561f35a586f0bb304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)