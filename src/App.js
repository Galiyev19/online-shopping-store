import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Header from './components/header/Header'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import SingleCategory from './components/Catalog/SingleCategory/SingleCategory';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import Order from "./components/Order/Order"
import Profile from "./components/Profile/Profile"
import SingleProduct from "./components/SingleProduct/SingleProduct";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="offset">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="catalog/:category" element={<SingleCategory/>}/>
            <Route path="/shopping-cart" element={<ShoppingCart/>}/>
            <Route path="/order" element={<Order/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="catalog/:category/:id" element={<SingleProduct/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
