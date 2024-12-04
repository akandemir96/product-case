import axios from "axios";

export const fetchProducts = async (url = "https://mock.akakce.dev/page.json") => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchProductDetail = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
