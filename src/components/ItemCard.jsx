import { addToCart } from "@/RTK-state/Sclice/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, details, image, id } = product;
  const addCart = () => {
    const orderId = Math.random().toString(36).slice(2);
    const orderProduct = {
      ...product,
      orderId,
    };
    dispatch(addToCart(orderProduct));
  };
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
            See More
          </Link>
          <button onClick={addCart} className="btn btn-success  ml-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
