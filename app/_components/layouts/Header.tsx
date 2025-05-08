"use client";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { Courgette } from "next/font/google";
import clsx from "clsx";
import "animate.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuState = () => {
    setIsMenuOpen((prev) => (prev = !prev));
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="h-fit sticky top-0 z-30  bg-white border-b-2 border-[rgba(0,0,0, 40)]">
      <div className="container mx-auto  flex items-center justify-between md:px-8 px-4  py-2 lg:py-4 h-12 sm:h-12 xl:h-20 lg:h-16  ">
        <div className="logo flex gap-2 items-center">
          <div className="button md:hidden" onClick={handleMenuState}>
            {isMenuOpen ? (
              <Image
                src="/Icons/clear.svg"
                alt="hamburger menu"
                width="22"
                height="22"
              />
            ) : (
              <Image
                src="/Icons/Hamborger-Icon.svg"
                alt="hamburger menu"
                width="22"
                height="22"
              />
            )}
          </div>
          <Link href="/" className="outline-none">
            <p className="text-black font-bold whitespace-nowrap">
              <span>largerthan</span>{" "}
              <span className={`${courgette.className}`}>i</span>
            </p>
          </Link>
        </div>
        <div
          className={clsx(
            "md:static absolute top-12 sm:top-12 left-0 bottom-0 md:block bg-[#1D2130] z-20   md:bg-transparent w-72  xs:w-96 md:w-fit px-5 py-9 md:px-0 md:py-0",
            {
              "animate__animated animate__fadeInLeft xs:-ml-1 sm:-ml-1 h-[calc(100vh-48px)]  sm:h-[calc(100vh-50px)]":
                isMenuOpen,
              hidden: !isMenuOpen,
            }
          )}
        >
          <Nav />
        </div>
        <div className="">
          <Link
            href={"/donation"}
            title="Donate button"
            className=" bg-[#1D2130] text-white xs:px-8 py-2 xs:max-h-11 px-6    font-medium rounded-sm"
          >
            Donate
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="overlay fixed w-screen z-10  top-0 left-0 right-0 bottom-0 "
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
