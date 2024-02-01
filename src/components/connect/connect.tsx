import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook, FaSpotify, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Connect = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div className="w-full flex flex-col gap-4 items-center flex-center">
        <Input
          placeholder="Name"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2   border-primary placeholder:text-primary "
        />
        <Input
          placeholder="Email"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2   border-primary placeholder:text-primary "
        />
        <Input
          placeholder="Subject"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2   border-primary placeholder:text-primary "
        />
        <Textarea
          placeholder="Message"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2   border-primary placeholder:text-primary "
        />
      </div>
      <div className="w-full flex flex-col gap-4 border rounded-md p-4 border-primary shadow-md">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium ">Email</h2>
          <p className="text-zinc-700">reddishrado@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium ">Phone</h2>
          <p className="text-zinc-700">+977 9818458647</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium ">Follow Me</h2>
          <div className="flex gap-4">
            <Link href="/" className="hover:scale-105 transition ">
              <FaFacebook className="w-8 h-8 text-zinc-200" />
            </Link>
            <Link href="/" className="hover:scale-105 transition ">
              <FaInstagram className="w-8 h-8 text-zinc-200" />
            </Link>
            <Link href="/" className="hover:scale-105 transition ">
              <FaSpotify className="w-8 h-8 text-zinc-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
