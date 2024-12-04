import React, { useEffect, useState } from "react";
import { getHomePageData, getMoreProducts } from "../viewModels/homeViewModels";
import HorizontalProductList from "../components/HorizontalProductList";
import VerticalProductList from "../components/VerticalProductList";
import "../styles/HomeView.css";

export default function HomeView() {
  const [horizontalProducts, setHorizontalProducts] = useState([]);
  const [verticalProducts, setVerticalProducts] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      const { horizontalProducts, verticalProducts, nextUrl } = await getHomePageData();
      setHorizontalProducts(horizontalProducts);
      setVerticalProducts(verticalProducts);
      setNextUrl(nextUrl);
      setLoading(false);
    };
    loadInitialData();
  }, []);

  const loadMoreProducts = async () => {
    if (!nextUrl) return;

    setLoading(true);
    const { verticalProducts: newProducts, nextUrl: newNextUrl } = await getMoreProducts(nextUrl);
    setVerticalProducts((prev) => [...prev, ...newProducts]);
    setNextUrl(newNextUrl);
    setLoading(false);
  };

  return (
    <div className="home-view">
      <h1 className="title">Ürün Listesi</h1>
      <HorizontalProductList products={horizontalProducts} />
      <VerticalProductList products={verticalProducts} />
      {nextUrl && (
        <div className="pagination">
          <button
            className="load-more"
            onClick={loadMoreProducts}
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Daha Fazla Yükle"}
          </button>
        </div>
      )}
    </div>
  );
}
