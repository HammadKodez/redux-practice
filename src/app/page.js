import Product from "@/components/Product";
import Image from "next/image";
import { productsList } from "@/store/productsList";
import "@/styles/Product.css";
import { store } from "@/store/index.js";

export default function Home() {
  console.log(store.getState());
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
