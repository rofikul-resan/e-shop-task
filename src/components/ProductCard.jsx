import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, details, image } = product;
  return (
    <div className="card card-compact h-full w-full bg-base-200 shadow-xl">
      <figure className="h-64">
        <Image
          loading="lazy"
          src={image}
          alt="Product"
          height={400}
          width={300}
          className="w-full h-auto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <p>
          <span className="font-semibold">Price :</span> $ resan {price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
