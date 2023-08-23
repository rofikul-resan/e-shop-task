"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-5">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-[700px] bg-base-200 text-base-content relative">
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
          {/* Sidebar content here */}
          <div className="my-6"></div>
          <li>
            <Link
              href={"/dashboard"}
              className={pathname === "/dashboard" && "btn-success"}
            >
              Admin Home
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard/order"}
              className={pathname === "/dashboard/order" && "btn-success"}
            >
              Order
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard/user"}
              className={pathname === "/dashboard/user" && "btn-success"}
            >
              User
            </Link>
          </li>
          <div className="divider my-6 border-black"></div>
          <div className="space-y-5 ml-4 flex flex-col absolute bottom-12">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href={"/dashboard"} className="mr-5 hover:text-gray-900">
              DashBoard
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
