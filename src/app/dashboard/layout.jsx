import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
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
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
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
          <li>
            <Link href={"./"}>home</Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
