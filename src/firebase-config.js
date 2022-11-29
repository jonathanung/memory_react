// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgn_wIEol30JvgRC_Kyc1ANhW5nlumLJk",
  authDomain: "sfu-hackathon-2022.firebaseapp.com",
  projectId: "sfu-hackathon-2022",
  storageBucket: "sfu-hackathon-2022.appspot.com",
  messagingSenderId: "71549950190",
  appId: "1:71549950190:web:67e762b18499a90a95bbff",
  measurementId: "G-T6ZKXXKTVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);