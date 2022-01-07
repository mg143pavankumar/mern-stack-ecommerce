import React from "react";
import Product from "./Product";

const products = {
  name: "Blue Shirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "Rs.3000",
  _id: "pavankumar",
};

const OurProduct = () => {
  return (
    <div className="h-auto md:px-24" id="ourproduct">
      <div className="py-10 px-8 md:px-0">
        <h1 className="text-center font-semibold text-2xl md:text-3xl text-secondaryDark border-b-4 border-secondaryDark w-72 md:w-1/4 m-auto py-3 relative">
          <div className="w-10 h-3 rounded-md bg-secondaryDark absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5" />
          Featured Products
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-y-5">
          <Product products={products} />
          <Product products={products} />
          <Product products={products} />
          <Product products={products} />
          <Product products={products} />
          <Product products={products} />
          <Product products={products} />
          <Product products={products} />
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
