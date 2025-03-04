"use client";
import Link from "next/link";
import links from "./menu/links";

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-10 lg:px-24 py-4 shadow-up">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-2 text-xs">
        {/* email contact */}
        <p className="flex gap-2">
          Mail :
          <a
            href="mailto:contact@ajm.fr"
            className=" underline"
            target="_blank"
          >
            contact@ajm.fr
          </a>
        </p>
        {/* menu reminder */}
        <div className="flex gap-4">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col  w-full justify-start lg:justify-between items-start gap-2 text-xs">
        <p>
          Téléphone :{" "}
          <strong className="underline text-body">00 00 00 00 00</strong>
        </p>
        <p className="flex gap-2">
          Développé par :
          <a
            href="https://www.devvv3.com"
            className=" underline"
            target="_blank"
          >
            devvv3
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
