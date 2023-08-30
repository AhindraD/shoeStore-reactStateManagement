import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { getProducts } from "./services/productService";
import Spinner from "./Spinner"

export default function App() {
  const [size, setSize] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // getProducts("shoes")
    //   .then((resp) => setProducts(resp))
    //   .catch((e) => setError(e))
    //   .finally(() => setLoading(false))
    async function fetchData() {
      try {
        const data = await getProducts("shoes");
        setProducts(data)
      } catch (e) {
        setError(e)
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [])

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

  if (loading) return <Spinner />
  if (error) throw error;

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
