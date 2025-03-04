"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import links from "./links";

const MobileMenu = () => {
  //* LOCAL STATE
  const currentPathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (pathname: string) => {
    // Specific logic for homepage route "/"
    if (pathname === "/") {
      return currentPathname === pathname;
    }
    // other cases
    return currentPathname.startsWith(pathname);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-between items-center w-full h-20 px-10 pt-3 drop-shadow-lg bg-mainColor z-30">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <GrClose size={25} /> : <GrMenu size={25} />}
        </button>
        <Link href={"/"}>
          <Image
            src={"/images/logo.webp"}
            alt="logo_ajm"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div
        className={`fixed inset-y-20 left-0 flex flex-col justify-start items-center gap-10 pt-10 bg-mainColor text-h3 w-full h-full transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 " : "-translate-x-full"
        } z-20`}
      >
        {links.map((link) => (
          <Link
            href={link.href}
            onClick={handleLinkClick}
            className={`px-4 py-1 border-b-2 ${
              isActive(link.href) ? " border-accentColor" : "border-transparent"
            } transition-all`}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default MobileMenu;
