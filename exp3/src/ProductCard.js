import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>₹{price}</p>

      {inStock ? (
        <p style={{ color: "green" }}>In Stock</p>
      ) : (
        <p style={{ color: "red" }}>Out of Stock</p>
      )}
    </div>
  );
}

export default ProductCard;