"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = ({ className }) => {
  const cartAmount = useSelector((state) => state.cart.length);
  const pathname = usePathname();
  return (
    <div className={`shadow-md ${className} `}>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 gap-6"
          >
            <Image
              src={"/logo.png"}
              height={96}
              width={96}
              alt="logo"
              className="h-12 w-auto"
              priority
            />
            <h1 className="text-3xl font-semibold">E-Shop</h1>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl md:justify-center flex-col md:flex-row ">
            <Link
              href={"/"}
              className="mr-5 hover:text-gray-900"
              style={
                pathname === "/" ? { borderBottom: "1px solid orange" } : {}
              }
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="mr-5 hover:text-gray-900"
              style={
                pathname === "/about"
                  ? { borderBottom: "1px solid orange" }
                  : {}
              }
            >
              About
            </Link>
            <Link
              href={"/dashboard"}
              className="mr-5 hover:text-gray-900"
              style={
                pathname === "/dashboard"
                  ? {
                      borderBottom: "1px solid orange",
                    }
                  : {}
              }
            >
              DashBoard
            </Link>
            <Link href={"/cart"} className="mr-5 hover:text-gray-900">
              <div className="relative">
                <FaOpencart />
                {cartAmount > 0 && (
                  <div className="badge badge-success badge-sm absolute -top-2 -right-3">
                    {cartAmount}
                  </div>
                )}
              </div>
            </Link>
          </nav>
          <Link href={"/auth/singUp"} className="btn btn-primary btn-sm">
            Register
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
