import React, { useState } from "react";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";

export default function Products() {
    const [size, setSize] = useState(undefined);
    const { data: products, loading, error } = useFetch("products?category=shoes");

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
        </>
    );
}