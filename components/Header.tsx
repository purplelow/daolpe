import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Hamburger from "hamburger-react";

export default function Header({ placeholder }: any) {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-280);
  const side = useRef(null);
  // const router = useRouter();

  const toggleMenu = () => {
    if (xPosition < 0) {
      setOpen(true);
      setX(0);
    } else {
      setOpen(false);
      setX(-280);
    }
  };

  const handleClose = async () => {
    let sideArea = side.current;
    if (isOpen && !sideArea) {
      await setX(-280);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 justify-end bg-black bg-opacity-50 px-3 py-1 shadow-md md:px-6 md:py-4">
      {/* Left - Logo */}
      <div
        // onClick={() => router.push("/")}
        className="relative my-auto flex h-10 w-16 cursor-pointer items-center md:w-auto "
      >
        <Link className="z-50" href={"/"}>
          <Image
            src="/assets/daolpe_logo.png"
            alt="다올 프라이빗에쿼티"
            fill
            className="object-contain object-left py-1"
          />
        </Link>
      </div>

      <div />

      {/* Right */}
      <div className="flex items-center justify-end space-x-14 text-lg text-gray-500">
        <div className="z-50">
          <Hamburger
            color={isOpen ? "black" : "white"}
            rounded
            onToggle={toggleMenu}
          />
        </div>

        <div
          ref={side}
          className={`fixed right-0 top-0 z-40 h-full w-[280px] transform bg-white bg-opacity-90 translate-x-[${-xPosition}px] transition-all ease-in`}
        >
          <ul className="bolder m-auto space-y-8 px-10 pt-32 text-2xl text-[#333]">
            <li>
              <Link className="block py-2" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-2" href={"/company"}>
                Company
              </Link>
            </li>
            <li>
              <Link className="block py-2" href={"/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="block py-2" href={"/leadership"}>
                Leadership
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
