import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTZwoZcwVmEbu7CcKK6LI-jQgT4zth08I",
  authDomain: "tienda-de-telefonos-24585.firebaseapp.com",
  projectId: "tienda-de-telefonos-24585",
  storageBucket: "tienda-de-telefonos-24585.appspot.com",
  messagingSenderId: "160154327326",
  appId: "1:160154327326:web:74e149d9a49c5550bb910f",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
