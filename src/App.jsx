import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartContextProvider>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Welcome to my shop" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
