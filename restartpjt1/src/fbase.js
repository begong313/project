// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS-wPLX5KWg8KSG_Zm5NEVLL0-bYqUSQE",
  authDomain: "dot-5project.firebaseapp.com",
  projectId: "dot-5project",
  storageBucket: "dot-5project.appspot.com",
  messagingSenderId: "110421529328",
  appId: "1:110421529328:web:09173fb88ba7700c2a2835",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const storageService = getFirestore();
