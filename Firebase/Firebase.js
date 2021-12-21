import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKFzbbUK1Chu70N-dxCVpYX3MamYNyGyo",
  authDomain: "handyman-9fa00.firebaseapp.com",
  projectId: "handyman-9fa00",
  storageBucket: "handyman-9fa00.appspot.com",
  messagingSenderId: "150613828777",
  appId: "1:150613828777:web:d2916b2f0505683372f5b8",
  measurementId: "G-WLXRHE9P89",
};
initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export { auth };
