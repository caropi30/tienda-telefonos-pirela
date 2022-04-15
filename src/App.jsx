import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Welcome to my shop'/>
    </div>
  );
}



export default App;

