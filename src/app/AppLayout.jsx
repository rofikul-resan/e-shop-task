"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const AppLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <main>
      <Navbar className={pathname.includes("dashboard") && "hidden"} />
      {children}
      <Footer className={pathname.includes("dashboard") && "hidden"} />
    </main>
  );
};

export default AppLayout;
