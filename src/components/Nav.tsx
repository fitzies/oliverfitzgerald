"use client";

import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Motion from "./Motion";

const Nav = () => {
  const navs = ["Projects", "Skills", "Github"];

  return (
    <Motion
      duration={3}
      type="fade"
      className="w-screen flex justify-between px-12 py-5 fixed"
    >
      <Link href="/" className="font-semibold navitem hover:bg-transparent">
        Oliver Fitzgerald
      </Link>
      <div className="flex gap-4 items-center">
        {navs.map((nav) => {
          return (
            <Link
              href={
                nav === "Github"
                  ? "https://github.com/fitzies/oliverfitzgerald"
                  : nav.toLowerCase()
              }
              className="font-medium navitem"
              target={nav === "Github" ? "_blank" : undefined}
              rel={nav === "Github" ? "noopener noreferrer" : undefined}
            >
              {nav === "Github" ? <BsGithub className="text-2xl" /> : nav}
            </Link>
          );
        })}
      </div>
    </Motion>
  );
};

export default Nav;
