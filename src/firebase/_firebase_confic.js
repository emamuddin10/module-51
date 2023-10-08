// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaANGp_qFRTs1JDEdZ3Fyno8iVHMFPYLw",
  authDomain: "module-51-1.firebaseapp.com",
  projectId: "module-51-1",
  storageBucket: "module-51-1.appspot.com",
  messagingSenderId: "977106006801",
  appId: "1:977106006801:web:8586ba7ca75d2cee5592b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;