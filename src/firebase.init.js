// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg8aeYS3ID7_WNx72KTcHZBauXSwG04yk",
  authDomain: "ema-john-simple-87919.firebaseapp.com",
  projectId: "ema-john-simple-87919",
  storageBucket: "ema-john-simple-87919.appspot.com",
  messagingSenderId: "1304844552",
  appId: "1:1304844552:web:1d6e0b2514d2a7c302f4bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;
