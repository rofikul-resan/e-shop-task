"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonkeeper.com/b/TBI9/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    console.log(products);
  }, [products]);
  return <div> p</div>;
};

export default ProductContainer;
