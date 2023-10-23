import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";

export default function Header({ placeholder }: any) {
  const [isOpen, setOpen] = useState(false);

  const showSettings = (e: any) => {
    e.preventDefault();
  };

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
          className="w-[60%] object-contain object-left"
          sizes="100%"
        />
        {/* <span className="bolder text-2xl text-white">다올프라이빗에쿼티</span> */}
      </div>

      <div />

      {/* Right */}
      <div className="flex items-center justify-end space-x-14 text-lg text-gray-500">
        {/* <p className="hidden md:inline">Become a host</p> */}
        {/* <Link href={"/"} className="text-white">
          Home
        </Link>
        <Link href={"/company"} className="text-white">
          Company
        </Link>
        <Link href={"/portfolio"} className="text-white">
          Portfolio
        </Link>
        <Link href={"/leadership"} className="text-white">
          Leadership
        </Link> */}
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" rounded />

        {/* <Menu width={"200px"}>
          <Link id="home" className="menu-item" href="/">
            Home
          </Link>
          <Link id="about" className="menu-item" href="/about">
            Company
          </Link>
          <Link id="contact" className="menu-item" href="/contact">
            Portfolio
          </Link>
          <Link onClick={showSettings} className="menu-item--small" href="">
            Settings
          </Link>
        </Menu> */}
      </div>
    </header>
  );
}
