// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB49tWNowwX1TtObdFHbrwgGiBKnEHRHXM",
  authDomain: "expense-tracker-1838d.firebaseapp.com",
  projectId: "expense-tracker-1838d",
  storageBucket: "expense-tracker-1838d.appspot.com",
  messagingSenderId: "173901925953",
  appId: "1:173901925953:web:0e80e9857b7264745580c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// firebase login
// firebase init
// firebase deploy
