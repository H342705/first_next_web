"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const LinkComp = ({ link, name }: { link: string; name: string }) => {
  const isActive = link == usePathname();
  return (
    <Link
      href={link}
      className={clsx(
        "text-white border-solid px-2 border-sky-200 rounded-md font-semibold text-lg font-sans",
        {
          "bg-purple-600 ": isActive,
        }
      )}
    >
      {name}
    </Link>
  );
};
export default LinkComp;
