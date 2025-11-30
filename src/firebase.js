// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA3bHAUpymr2RcN4DKIXM5g41vSUqRBI0",
  authDomain: "intromobilefirebase.firebaseapp.com",
  projectId: "intromobilefirebase",
  storageBucket: "intromobilefirebase.firebasestorage.app",
  messagingSenderId: "942499380369",
  appId: "1:942499380369:web:70fecbbf1ec0abce755330",
  measurementId: "G-THDE32SV7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };