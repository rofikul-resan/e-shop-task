import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemCard = ({ product }) => {
  const { name, price, details, image, id } = product;
  return (
    <div className="card card-compact h-full w-full bg-base-200 shadow-xl">
      <figure className="h-64">
        <Image
          loading="lazy"
          src={image}
          alt="Product"
          height={400}
          width={300}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <p>
          <span className="font-semibold">Price :</span> $ {price}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/product/${id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
