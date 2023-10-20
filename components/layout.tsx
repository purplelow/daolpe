"use client";

import React from "react";
import Link from "next/link";
import { cls } from "../libs/utils";
import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="h-screen w-screen">
      <div className="relative h-full w-full">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
