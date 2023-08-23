import { deleteToCart } from "@/RTK-state/Sclice/cartSlice";
import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center bg-base-200 gap-4">
      <Image
        loading="lazy"
        src={product?.image}
        height={64}
        width={64}
        alt="product"
        className="h-16 w-16 rounded object-cover"
      />

      <div>
        <h3 className="text-sm text-gray-900">{product?.name}</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Price:</dt>
            <dd className="inline">{product?.price}</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <button
          onClick={() => dispatch(deleteToCart(product.orderId))}
          className="text-gray-600 transition hover:text-red-600 btn btn-ghost mr-4"
        >
          <AiOutlineDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
