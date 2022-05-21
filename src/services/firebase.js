// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTZwoZcwVmEbu7CcKK6LI-jQgT4zth08I",
  authDomain: "tienda-de-telefonos-24585.firebaseapp.com",
  projectId: "tienda-de-telefonos-24585",
  storageBucket: "tienda-de-telefonos-24585.appspot.com",
  messagingSenderId: "160154327326",
  appId: "1:160154327326:web:74e149d9a49c5550bb910f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
