// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUN8ijvfupX2Or410WRPwZ_53IntQDRtQ",
  authDomain: "syncode-38347.firebaseapp.com",
  projectId: "syncode-38347",
  storageBucket: "syncode-38347.appspot.com",
  messagingSenderId: "344258895139",
  appId: "1:344258895139:web:f7a95ebc3d18e7cd0f8096",
  measurementId: "G-5GRD7BEYL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
