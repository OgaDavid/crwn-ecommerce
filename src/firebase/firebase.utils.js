import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzyYJknE6OFP9Foa51JKAj8-is-bxe6g0",
  authDomain: "crwn-clothing-b3c9e.firebaseapp.com",
  projectId: "crwn-clothing-b3c9e",
  storageBucket: "crwn-clothing-b3c9e.appspot.com",
  messagingSenderId: "449794800681",
  appId: "1:449794800681:web:6016c3157f4559d791b038",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
