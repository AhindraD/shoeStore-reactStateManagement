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
          <Route path='/' element={<Products />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App