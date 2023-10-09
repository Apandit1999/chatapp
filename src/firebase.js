// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyD1ZaQnlu7VY4rUlNGmbEcMxlvqQt8Q7pw",
  authDomain: "userchat-6e48d.firebaseapp.com",
  projectId: "userchat-6e48d",
  storageBucket: "userchat-6e48d.appspot.com",
  messagingSenderId: "284808060769",
  appId: "1:284808060769:web:df88ba00c469ac5450ef20"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db = getFirestore()
