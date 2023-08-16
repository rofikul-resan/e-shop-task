"use client";
import { getProduct } from "@/RTK-state/Sclice/ProductSlice";
import ItemCard from "@/components/ItemCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const ProductContainer = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="py-10">
      {products.length === 0 && (
        <div className="h-64 w-full flex items-center justify-center">
          <ClipLoader color={"black"} size={50} />
        </div>
      )}
      <div className="grid md:grid-cols-3 md:w-9/12 mx-auto gap-6">
        {products.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
