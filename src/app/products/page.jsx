// page.js
"use client";
import Product from "@/components/Product";
import Image from "next/image";
import { productsList } from "@/store/productsList";
import "@/styles/Product.css";
// import { store } from "@/store/index.js"; // REMOVE THIS IMPORT from page.js

export default function Products() {
  // console.log(store); // REMOVE THIS console.log as store is client-side
  return (
    <>
      <div className="products-container">
        {productsList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    </>
  );
}
