import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import data from "./db.json";

export default function App() {
  const products = data.products;
  const [size, setSize] = useState(null);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  const filteredProducts = size ?
    products.filter((p) => p.skus.find((s) => s.size === Number(size)))
    : products;

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size}
              onChange={(e) => {
                // debugger;
                setSize(e.target.value);
              }}>
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            {size && <h2>Found {filteredProducts.length} Items</h2>}
            <section id="products">
              {filteredProducts.map(renderProduct)}
            </section>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
