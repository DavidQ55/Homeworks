import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAuN4e1aYWumvLGf0pUvu5yyHsIVi9n5U8",
  authDomain: "fir-738ca.firebaseapp.com",
  projectId: "fir-738ca",
  databaseURL: "https://fir-738ca-default-rtdb.firebaseio.com/",
  storageBucket: "fir-738ca.firebasestorage.app",
  messagingSenderId: "348799962064",
  appId: "1:348799962064:web:cf23fb7cb303b9dabc47d5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
