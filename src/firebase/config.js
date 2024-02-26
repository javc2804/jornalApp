// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHHfEQYh1y1haj7r_cpMYBtJLqIK-LTQk",
  authDomain: "react-cursos-36679.firebaseapp.com",
  projectId: "react-cursos-36679",
  storageBucket: "react-cursos-36679.appspot.com",
  messagingSenderId: "238717014199",
  appId: "1:238717014199:web:ac1bd6415eb3e09ca9fd32",
  measurementId: "G-67MH14BQS5",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getAuth(FirebaseApp);
