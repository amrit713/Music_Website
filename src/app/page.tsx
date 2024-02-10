import Image from "next/image";

import { FaSpotify, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <div className="  flex justify-center bg-green-100">
      <div className="group absolute bottom-0 banner transition z-10 hover:bg-black">
        <div className="">
          <div className="absolute z-10 top-[50%] left-[50%] flex gap-4 translate-x-[-50%] translate-y-[-50%] justify-center items-center">
            <Link href={"#"}>
              <FaSpotify className="hidden group-hover:flex w-9 h-9 text-white hover:scale-110 hover:text-zinc-200 transition" />
            </Link>
            <Link href={"#"}>
              <SiApplemusic className="hidden w-8 h-8 group-hover:flex text-white hover:scale-110 transition hover:text-zinc-200" />
            </Link>
            <Link href={"#"}>
              <AiFillInstagram className="hidden w-10 h-10 group-hover:flex text-white hover:scale-110 transition hover:text-zinc-200" />
            </Link>
            <Link href={"#"}>
              <FaFacebook className="hidden w-9 h-9 group-hover:flex text-white hover:scale-110 transition hover:text-zinc-200" />
            </Link>
          </div>
          <Image
            src="/banner.jpeg"
            alt="image"
            height={700}
            width={560}
            className="object-cover opacity-70  "
          />
        </div>
      </div>
    </div>
  );
}
