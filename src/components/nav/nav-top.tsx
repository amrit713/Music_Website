"use client";

import { Anton } from "next/font/google";
import Link from "next/link";

const font = Anton({ subsets: ["latin"], weight: ["400"] });

export const NavTop = () => {
  return (
    <div className={font.className}>
      <div className="  ">
        <Link href="/">
          <p className="text-4xl md:text-6xl text-center">Reddishrado</p>
        </Link>
      </div>
    </div>
  );
};
