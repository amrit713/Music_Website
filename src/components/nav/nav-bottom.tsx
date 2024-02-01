"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = ["album", "gallery", "about", "connect"];

export const NavBottom = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between max-w-[540px] mx-auto gap-4">
      {routes.map((route) => (
        <Link
          className={cn(
            "uppercase sm:text-xl font-medium text-white hover:text-primary transition ",
            pathname === `/${route}` && "text-primary"
          )}
          key={route}
          href={`/${route}`}
        >
          {route}
        </Link>
      ))}
    </div>
  );
};
