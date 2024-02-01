import { Button } from "@/components/ui/button";
import { PlayCircle, PlusCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

interface AlbumCardProps {
  singerName: string;
  albumName: string;
  src: string;
  href: string;
}
export const AlbumCard = ({
  singerName,
  albumName,
  src,
  href,
}: AlbumCardProps) => {
  return (
    <div className="relative bg-primary h-[400px] rounded-md p-8">
      {/* icon */}
      <PlayCircle className="absolute right-4 bottom-4 w-10 h-10 text-white hover:scale-105 transition cursor-pointer" />

      <FaSpotify className="absolute right-4 top-4 w-10 h-10 text-white hover:scale-105 transition cursor-pointer" />

      {/* image and more */}
      <div className="">
        {/* image */}
        <div className="relative mx-auto w-[70%] h-[200px] rounded-lg overflow-hidden bg-primary ">
          <Image src={src} alt={src} fill objectFit="cover" />
        </div>

        {/* content */}
        <div className="flex  flex-col gap-4 mt-4">
          <h2 className="text-white text-xl font-medium">{albumName}</h2>
          <div className="flex items-center gap-4 text-zinc-400">
            <Button
              size="sm"
              variant="secondary"
              className="uppercase font-medium"
            >
              {" "}
              preview
            </Button>
            <p> by {singerName}</p>
          </div>

          <Link
            href={href}
            className="flex  items-center gap-4 text-zinc-300 hover:underline transition"
          >
            <PlusCircle className="w-6 h-6" />
            <span>Save on Spotify</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
