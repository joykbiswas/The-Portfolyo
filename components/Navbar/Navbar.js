"use client";
import Link from "next/link";
import { FaAddressCard, FaBookReader, FaHome } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
// import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const navLink = [
    {
      href: "/",
      icon: <FaHome className="text-xl" />,
      text: "Home",
    },
    {
      href: "/resume",
      icon: <FaBookReader className="text-xl" />,
      text: "Resume",
    },
    {
      href: "/works",
      icon: <FaHome className="text-xl" />,
      text: "Works",
    },
    {
      href: "/contacts",
      icon: <FaAddressCard className="text-xl" />,
      text: "Contacts",
    },
  ];
  const pathname = usePathname();
  const handleLinkClick = () => {
    setLinkClicked(true);
  };

  // console.log(router.pathname);
  return (
    <div className="md:flex z-10 items-center gap-8 justify-end">
      <div className="flex justify-start gap-3 bg-white dark:bg-my-dark px-6 py-4 rounded-md">
        {navLink.map((link) => {
          // const isActive = pathname.startsWith(link.href)
          const isActive = pathname.startsWith(link.href) && (pathname === link.href);

          console.log(isActive);

          return (
            <Link
              key={link.text}
              href={link.href}
              onClick={handleLinkClick}
              className={
                isActive ? "bg-gradient-to-r from-red-500 to-yellow-500 p-2 mr-3 text-white " : "bg-slate-200 p-3 mr-3"
              }
            >
              {link.icon}
              <h1>{link.text}</h1>
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
