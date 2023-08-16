import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              src={"/logo.png"}
              height={96}
              width={96}
              alt="logo"
              className="h-12 w-auto"
              priority
            />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl md:justify-center flex-col md:flex-row ">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              DashBoard
            </Link>
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              <div className="relative">
                <FaOpencart />
                <div className="badge badge-success badge-sm absolute -top-2 -right-3">
                  1
                </div>
              </div>
            </Link>
          </nav>
          <button className="btn btn-primary btn-sm">log in</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
