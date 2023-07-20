import { Product, TransformedProduct } from "@/pages/products";

export function transformProduct(product: Product): TransformedProduct{
   return {
    id: product.id,
    name: product.title,
    price: product.price,
    description: product.description,
    image: product.images[0],
    category: product.category,
  };
}