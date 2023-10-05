// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA4ZLka4XkHUtBy-aCcF2c4QJ4uTC8rtw",
  authDomain: "user-email-password-auth-c3760.firebaseapp.com",
  projectId: "user-email-password-auth-c3760",
  storageBucket: "user-email-password-auth-c3760.appspot.com",
  messagingSenderId: "270176796719",
  appId: "1:270176796719:web:c4c7315347ad3a87c846da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;