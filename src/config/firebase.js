// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRy4XzBna355EgcDaxQ9McxiIe-Q-QF48",
  authDomain: "icesi-react-js.firebaseapp.com",
  projectId: "icesi-react-js",
  storageBucket: "icesi-react-js.appspot.com",
  messagingSenderId: "489821069287",
  appId: "1:489821069287:web:8e67926923231044352742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;