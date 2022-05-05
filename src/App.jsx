import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
//import Header from './components/Header/Header';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
        <NavBar/>
        {/*<Header />*/}
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Welcome to my shop'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </div>
  );
}



export default App;

