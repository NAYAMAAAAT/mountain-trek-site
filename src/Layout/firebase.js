// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVC-3NBlROzSUR7KgPfSF9R4c-63yzIu8",
  authDomain: "boi-poka-project.firebaseapp.com",
  projectId: "boi-poka-project",
  storageBucket: "boi-poka-project.firebasestorage.app",
  messagingSenderId: "261677160889",
  appId: "1:261677160889:web:cb0f29234a998c2e1b3e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);