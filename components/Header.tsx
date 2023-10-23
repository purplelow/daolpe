import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Hamburger from "hamburger-react";

export default function Header({ placeholder }: any) {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState("280");
  const side = useRef(null);
  // const router = useRouter();

  const toggleMenu = () => {
    if (+xPosition > 0) {
      setOpen(true);
      setX("0");
    } else {
      setOpen(false);
      setX("280");
    }
  };

  const handleClose = async () => {
    let sideArea = side.current;
    if (isOpen && !sideArea) {
      await setX("280");
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
    <header className="sticky top-0 z-50 grid grid-cols-2 justify-end px-3 py-1 md:px-10 md:py-6">
      {/* Left - Logo */}
      <div
        // onClick={() => router.push("/")}
        className="relative my-auto flex h-10 w-full cursor-pointer items-center"
      >
        <Link className="z-50 block" href={"/"}>
          <Image
            src="/assets/logo_white.png"
            alt="다올 프라이빗에쿼티"
            fill
            className="object-contain object-left py-1"
          />
        </Link>
      </div>

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
          className={`fixed ${
            isOpen ? "right-0" : "-right-[280px]"
          }  top-0 z-40 h-full w-[280px] bg-white bg-opacity-90 transition-all ease-in`}
        >
          <div className="grid h-full grid-cols-1 grid-rows-2 items-center justify-end">
            <ul className="bolder space-y-8 pl-16 pt-32 text-left text-2xl text-[#222222]">
              <li>
                <Link className="block py-2" href={"/"}>
                  Main
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
            <div className="flex h-full flex-col flex-wrap items-center justify-end pb-4">
              <span className="px-4 text-center text-[10px]">
                COPYRIGHT© <br />
                DAOL Private Equity ALL RIGHTS RESERVED.
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
