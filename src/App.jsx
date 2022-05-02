import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
        <NavBar/>
        <Header />
        <ItemListContainer greeting='Welcome to my shop'/>
    </div>
  );
}



export default App;

