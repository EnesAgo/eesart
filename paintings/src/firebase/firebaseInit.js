// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX10L54vZ2Es7GSTLoF59RZIGmFC52dvg",
    authDomain: "esart-1a2eb.firebaseapp.com",
    projectId: "esart-1a2eb",
    storageBucket: "esart-1a2eb.appspot.com",
    messagingSenderId: "152439801877",
    appId: "1:152439801877:web:798087db0e518cbef4261c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const expObj = {
    app: app,
    firestoreDb: db
}

export default expObj