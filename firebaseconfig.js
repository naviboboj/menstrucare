// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOjoWXJlHirlP1XfgTyd0wpVB8jYfqNlg",
  authDomain: "menstrucare-f032c.firebaseapp.com",
  projectId: "menstrucare-f032c",
  storageBucket: "menstrucare-f032c.appspot.com",
  messagingSenderId: "264857755784",
  appId: "1:264857755784:web:75e7b0ec1091fcc70cff3d",
  measurementId: "G-XTHXZHB974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);



export {db};