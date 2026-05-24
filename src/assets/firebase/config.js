import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw5SUq10DKZSb6H4_VlnON7f8_ShiiEhs",
  authDomain: "studio-c-image.firebaseapp.com",
  projectId: "studio-c-image",
  storageBucket: "studio-c-image.firebasestorage.app",
  messagingSenderId: "226407213604",
  appId: "1:226407213604:web:0461c5f704b625feb286b1",
  measurementId: "G-RMGXYW5004"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);