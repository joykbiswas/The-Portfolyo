"use client"
import React from "react";
import Link from "next/link";
import { FaAddressCard, FaBlog, FaBookReader, FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <div className="md:flex z-10 items-center gap-8 justify-end">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex justify-start gap-3 bg-white dark:bg-my-dark px-6 py-4 rounded-md"
      >
        <NavItem href="/" icon={<FaHome className="text-xl" />} text="Home" />
        <NavItem href="/resume" icon={<FaBookReader className="text-xl" />} text="Resume" />
        <NavItem href="/works" icon={<FaHome className="text-xl" />} text="Works" />
        {/* Commented out the blog */}
        {/* <NavItem href="/blogs" icon={<FaBlog className="text-xl" />} text="Blogs" /> */}
        <NavItem href="/contacts" icon={<FaAddressCard className="text-xl" />} text="Contacts" />
      </div>
    </div>
  );
};

const NavItem = ({ href, icon, text }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  console.log(router.pathname);

  

  return (
    <Link href={href}>
      <div className={`flex w-24 flex-col items-center gap-2 px-2 py-4 rounded-md hover:text-white ${isActive ? 'bg-green-500' : 'bg-red-400'}`}>
        {icon}
        <h1>{text}</h1>
      </div>
    </Link>
  );
};

export default Navbar;
