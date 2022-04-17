// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD75ckXQlfOWesd4V1q6h0iOw7OO_DSpu0",
  authDomain: "assignment-ten-8e38b.firebaseapp.com",
  projectId: "assignment-ten-8e38b",
  storageBucket: "assignment-ten-8e38b.appspot.com",
  messagingSenderId: "607744116342",
  appId: "1:607744116342:web:ac792113a44b703d0ec157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;