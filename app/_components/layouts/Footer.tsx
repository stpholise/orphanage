"use client";
import React from "react";
import { Courgette } from "next/font/google";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

interface NavItem {
  title: string;
  link: string;
}

const navItems: NavItem[] = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "What we do", link: "/services" },
  { title: "Contact", link: "/contact" },
];

const moreItems: NavItem[] = [
  { title: "Projects", link: "/" },
  { title: "Events", link: "/" },
  { title: "Donate", link: "/" },
  { title: "Blog", link: "/" },
];

const connectItems: NavItem[] = [
  { title: "Facebook", link: "/" },
  { title: "Instagram", link: "/" },
  { title: "Twitter", link: "/" },
  { title: "Linkdin", link: "/" },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-black">
      <div className="container mx-auto lg:px-8 px-4 lg:py-16 py-9 flex md:flex-row flex-col gap-6 md:gap-24">
        <div className="logo">
          <p className="text-white font-bold">
            <span>largerthan</span>{" "}
            <span className={`${courgette.className}`}>i</span>
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-row gap-8 lg:gap-24 ">
          <div className={`flex flex-col gap-4 text-[#525560]`}>
            {navItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={clsx("outline-none", {
                  "": pathname === item.link,
                  "text-white": index === 0,
                })}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className={`flex flex-col gap-4 text-[#525560]`}>
            <h4 className="text-white">More</h4>
            {moreItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={clsx("outline-none", {
                  "": pathname === item.link,
                })}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className={`flex flex-col gap-4 text-[#525560]`}>
            <h4 className="text-white">Connect</h4>
            {connectItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={clsx("outline-none", {
                  "": pathname === item.link,
                })}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
