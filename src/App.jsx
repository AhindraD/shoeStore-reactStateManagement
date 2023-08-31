import React from 'react';
import Products from './Products';
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Detail from './Detail';
import Cart from './Cart';

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<h1>Welcome to Fitness</h1>}></Route>

          {/* Placeholder url to get category from url */}
          <Route path='/:category' element={<Products />}></Route>
          
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App