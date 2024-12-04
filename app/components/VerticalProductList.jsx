import { useNavigate } from "@remix-run/react";
import "../styles/VerticalProductList.css";

export default function VerticalProductList({ products }) {
  const navigate = useNavigate();

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="vertical-list">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="card-media"
          />
          <div className="card-content">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-price">{product.price} TL</p>
            <button onClick={() => handleNavigate(product.code)} className="detail-button">
              Detaya Git
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
