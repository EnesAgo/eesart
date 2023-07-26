// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwc43aKTi397QiaiBa-pmrdKIvKXt9Ik4",
    authDomain: "eesart-test.firebaseapp.com",
    projectId: "eesart-test",
    storageBucket: "eesart-test.appspot.com",
    messagingSenderId: "585569405813",
    appId: "1:585569405813:web:2458f3f90fb88d4361e13c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const expObj = {
    app: app,
    firestoreDb: db
}

export default expObj