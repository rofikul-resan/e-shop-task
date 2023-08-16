"use client";
import { getProduct } from "@/RTK-state/Sclice/ProductSlice";
import ItemCard from "@/components/ItemCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductContainer = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="py-10">
      resan
      <div className="grid md:grid-cols-3 md:w-9/12 mx-auto gap-6">
        {products.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
