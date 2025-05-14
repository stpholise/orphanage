"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  link: string;
}

const navItems: NavItem[] = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "What we do", link: "/services" },
  { title: "Media", link: "/media" },
  { title: "Contact", link: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        `flex md:flex-row gap-4 text-white md:text-[#525560] md:dark:text-gray-200 flex-col w-full `
      )}
    >
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={clsx("outline-none", {
            "font-bold text-red tesxt-lg sm:test-base":
              pathname == item.link ||
              (item.link !== "/" && pathname.startsWith(item.link)),
          })}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
