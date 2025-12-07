import React, { useState } from "react";
import Products from "../ProductsData/product.js"; 

function ProductsList() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState([0, 500]); // faixa de preço
  const [sortOption, setSortOption] = useState("relevance");

  const filteredProducts = Products.filter((product) => {
    const categoryMatch =
      categoryFilter === "all" || product.category === categoryFilter;

    const productPrice = product.variations
      ? Math.min(...product.variations.map((v) => v.price))
      : product.price;

    const priceMatch =
      productPrice >= priceFilter[0] && productPrice <= priceFilter[1];

    return categoryMatch && priceMatch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    let priceA = a.variations
      ? Math.min(...a.variations.map((v) => v.price))
      : a.price;
    let priceB = b.variations
      ? Math.min(...b.variations.map((v) => v.price))
      : b.price;

    switch (sortOption) {
      case "low":
        return priceA - priceB;
      case "high":
        return priceB - priceA;
      case "relevance":
      default:
        return b.rating - a.rating; 
    }
  });

  return (
    <div>
      {/* Filtros */}
      <div className="filters">
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="all">ALL</option>
          <option value="Eyes">EYES</option>
          <option value="Face">FACE</option>
          <option value="Hair">HAIR</option>
          <option value="Lips">LIPS</option>
          <option value="Others">OTHERS</option>
        </select>

        <input
          type="number"
          placeholder="Preço mínimo"
          onChange={(e) =>
            setPriceFilter([Number(e.target.value), priceFilter[1]])
          }
        />
        <input
          type="number"
          placeholder="Preço máximo"
          onChange={(e) =>
            setPriceFilter([priceFilter[0], Number(e.target.value)])
          }
        />

        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="relevance">Mais relevante</option>
          <option value="low">Menor preço</option>
          <option value="high">Maior preço</option>
        </select>
      </div>

      {/* Contagem de produtos */}
      <p>{sortedProducts.length} ITEMS</p>

      {/* Lista de produtos */}
      <div className="products-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.defaultImage} alt={product.name} width={150} />
            <h3>{product.name}</h3>
            <p>
              R${" "}
              {product.variations
                ? Math.min(...product.variations.map((v) => v.price)).toFixed(2)
                : product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
