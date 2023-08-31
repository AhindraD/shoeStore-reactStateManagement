import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from './Products';
import Footer from "./Footer";
import Header from "./Header";
import Detail from './Detail';
import Cart from './Cart';

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<h1>Welcome to Carved Rock Fitness!!!</h1>}></Route>

          {/* Placeholder url to get category from url */}
          <Route path='/:category' element={<Products />}></Route>

          <Route path='/:category/id' element={<Detail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App