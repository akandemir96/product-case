import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // React Router için
import "../styles/ProductDetailView.css";

export default function ProductDetailView() {
  const { productId } = useParams(); // URL'den productId'yi al
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ürün detaylarını fetch eden bir fonksiyon
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://mock.akakce.dev/product${productId}.json`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Ürün detayları alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (loading) {
    return <div className="loading">Yükleniyor...</div>;
  }

  if (!product) {
    return <div className="error">Ürün bulunamadı.</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">{product.price} TL</p>
        <p className="product-rating">Puan: {product.rating}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}
