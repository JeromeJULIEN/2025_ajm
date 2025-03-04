"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "./links";
import Image from "next/image";

const DesktopMenu = () => {
  //* LOCAL STATE
  const currentPathname = usePathname();

  const isActive = (pathname: string) => {
    // Specific logic for homepage route "/"
    if (pathname === "/") {
      return currentPathname === pathname;
    }
    // other cases
    return currentPathname.startsWith(pathname);
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-between items-center w-full h-20 px-10 pt-2 drop-shadow-lg  bg-mainColor  z-20 ">
        <Link href={"/"}>
          <Image
            src={"/images/logo.webp"}
            alt="logo_ajm"
            width={50}
            height={50}
          />
        </Link>

        <div className="flex justify-end items-center  text-h3  w-1/2 h-full">
          {links.map((link) => (
            <Link
              href={link.href}
              className={`px-4 py-1 border-b-2 text-neutral-500 ${
                isActive(link.href)
                  ? " border-accentColor"
                  : "border-transparent"
              } transition-all ease-in-out duration-300 hover:text-black hover:underline`}
              key={link.href}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopMenu;
