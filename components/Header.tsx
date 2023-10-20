import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Header({ placeholder }: any) {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 justify-end bg-black bg-opacity-30 px-3 py-1 shadow-md md:px-6 md:py-4">
      {/* Left - Logo */}
      <div
        // onClick={() => router.push("/")}
        className="relative my-auto flex h-10 w-16 cursor-pointer items-center md:w-auto "
      >
        <Image
          src="/assets/daolpe_logo.png"
          alt="logo"
          fill
          className="object-contain object-left"
          sizes="100%"
        />
        {/* <span className="bolder text-2xl text-white">다올프라이빗에쿼티</span> */}
      </div>

      <div />

      {/* Right */}
      <div className="flex items-center justify-end space-x-14 text-gray-500">
        {/* <p className="hidden md:inline">Become a host</p> */}
        <Link href={"/company"} className="text-white">
          Company
        </Link>
        <Link href={"/portfolio"} className="text-white">
          Portfolio
        </Link>
        <Link href={"/leadership"} className="text-white">
          Leadership
        </Link>
      </div>
    </header>
  );
}
