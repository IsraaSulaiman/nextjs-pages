import { Category } from "@/components/category-list";
import { getProducts } from "@/lib/data";
import React from "react";
import Image from "next/image";
import style from "./products.module.scss";
import Link from "next/link";
import { transformProduct } from "@/lib/format";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";

export interface TransformedProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

function ProductsPage({ products }: { products: Product[] }) {
  const transformedProducts: TransformedProduct[] = products.map(prod => {
    return transformProduct(prod);
  });
  return (
    <section className={style.productList}>
      {transformedProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
export default ProductsPage;

export function ProductItem({
  product: { name, image, price, id },
}: {
  product: TransformedProduct;
}) {
  const addToCart = () => {};
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name='description' content='Products testtttttt' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <Link href={`/products/` + id}>
          <Image height='400' width='400' src={image} alt={name} />
        </Link>
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <button className='tt-btn primary' onClick={addToCart}>
            Add to card
          </button>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};
