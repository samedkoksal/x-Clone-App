// Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa08Q5i0xD4YS9jweA-p9yba4Qad_Fgvk",
  authDomain: "xclone-project.firebaseapp.com",
  projectId: "xclone-project",
  storageBucket: "xclone-project.appspot.com",
  messagingSenderId: "265416550531",
  appId: "1:265416550531:web:44e272a328bce442be13b6",
  measurementId: "G-F0QLCL2XM6",
};

const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);

export default dataBase;
