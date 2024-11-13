import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDWPV48cCPBMgu97MlUlqfwy1SOytdlfhc",
    authDomain: "semple-firebase.firebaseapp.com",
    projectId: "semple-firebase",
    storageBucket: "semple-firebase.firebasestorage.app",
    messagingSenderId: "746363080426",
    appId: "1:746363080426:web:10da9e23b3cc3a6347d193"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}