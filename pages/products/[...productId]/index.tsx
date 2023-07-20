import { getProductDetails } from "@/lib/data";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { Product, ProductItem } from "..";
import { transformProduct } from "@/lib/format";

function ProductDetail({ product }: { product: Product }) {
  const transformedProduct = transformProduct(product);
  return (
    <div>
      <h2>
        Welcome to product {product.id} ( {product.title} )
      </h2>
      <ProductItem product={transformedProduct} />
    </div>
  );
}

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;
  if (!params || !params.productId) {
    //redirect to 404
    return {
      props: {},
    };
  }
  const product = await getProductDetails(params.productId as string);

  return {
    props: {
      product,
    },
  };
};
