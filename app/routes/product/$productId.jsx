import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const { productId } = params;
  const response = await fetch(`https://mock.akakce.dev/product${productId}.json`);
  if (!response.ok) {
    throw new Response("Ürün bulunamadı", { status: 404 });
  }
  const product = await response.json();
  return product;
}

export default function ProductDetail() {
  const product = useLoaderData();

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Fiyat: {product.price} TL</p>
      <p>{product.description}</p>
    </div>
  );
}
