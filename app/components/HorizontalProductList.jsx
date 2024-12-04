import React from "react";
import "../styles/HorizontalProductList.css"; // CSS dosyasını import ediyoruz

export default function HorizontalProductList({ products }) {
  return (
    <div className="horizontal-list">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="card-media"
          />
          <div className="card-content">
            <p className="card-title">{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
