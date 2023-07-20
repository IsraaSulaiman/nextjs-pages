import React from "react";
import Image from "next/image";

import style from "./category.module.scss";

export interface Category {
  name: string;
  id: string;
  image: string;
}

function categoryList({ categories }: { categories: Category[] }) {
  return (
    <section className={style.categoryList}>
      {categories.map(cat => (
        <CategoryItem key={cat.id} category={cat} />
      ))}
    </section>
  );
}

export default categoryList;

function CategoryItem({ category: { name, image } }: { category: Category }) {
  return (
    <>
      <section>
        <div>
          <div>
            <Image src={image} alt={name} width='200' height='200' />
          </div>
          <h3>{name}</h3>
        </div>
      </section>
    </>
  );
}
