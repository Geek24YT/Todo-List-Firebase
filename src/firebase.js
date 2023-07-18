import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIIeoWWe-NLPE2zUxizDMJWOePdc8oGhc",
  authDomain: "todo-list-2b983.firebaseapp.com",
  projectId: "todo-list-2b983",
  storageBucket: "todo-list-2b983.appspot.com",
  messagingSenderId: "441149586492",
  appId: "1:441149586492:web:48896fec16ea672dfb9739",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
