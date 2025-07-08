// page.js

import Products from "./products/page";

// import { store } from "@/store/index.js"; // REMOVE THIS IMPORT from page.js

export default function Home() {
  // console.log(store); // REMOVE THIS console.log as store is client-side
  return (
    <>
      <Products />
    </>
  );
}
