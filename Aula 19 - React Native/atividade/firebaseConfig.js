// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmhqGLYvQ546NE6sJY0_1_26Bb6zSt0dM",
  authDomain: "aula20-89a2a.firebaseapp.com",
  projectId: "aula20-89a2a",
  storageBucket: "aula20-89a2a.firebasestorage.app",
  messagingSenderId: "259574148644",
  appId: "1:259574148644:web:96e35144ac21b9c072b2b1",
  measurementId: "G-6R46GQJJGL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);