import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTZwoZcwVmEbu7CcKK6LI-jQgT4zth08I",
  authDomain: "tienda-de-telefonos-24585.firebaseapp.com",
  projectId: "tienda-de-telefonos-24585",
  storageBucket: "tienda-de-telefonos-24585.appspot.com",
  messagingSenderId: "160154327326",
  appId: "1:160154327326:web:74e149d9a49c5550bb910f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
