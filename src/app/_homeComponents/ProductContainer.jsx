"use client";
import ProductCard from "@/components/Productcard";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/product.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="py-10">
      <div className="grid md:grid-cols-3 md:w-9/12 mx-auto gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
