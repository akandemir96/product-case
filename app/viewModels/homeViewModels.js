import { fetchProducts } from "../models/ProductModel";

export const getHomePageData = async () => {
  const data = await fetchProducts();
  return {
    horizontalProducts: data.horizontalProductList || [],
    verticalProducts: data.productList || [],
    nextUrl: data.nextUrl || null,
  };
};

export const getMoreProducts = async (nextUrl) => {
  if (!nextUrl) return { verticalProducts: [], nextUrl: null };

  const data = await fetchProducts(nextUrl);
  return {
    verticalProducts: data.productList || [],
    nextUrl: data.nextUrl || null,
  };
};
