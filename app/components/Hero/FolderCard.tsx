"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingImage from "./FloatingImage";

const floating = [
  { id: 1, rotateRest: -10, rotateHover: -15, hoverX: -30, hoverY: -10 },
  { id: 2, rotateRest: 10, rotateHover: -5, hoverX: 0, hoverY: -5 },
  { id: 3, rotateRest: 0, rotateHover: 10, hoverX: 35, hoverY: -20 },
];

export default function FolderCard({
  slug,
  link,
  color,
}: {
  slug: string;
  link: string;
  color: string;
}) {
  return (
    <Link href={`#${link}`}>
      <motion.div
        className="group flex flex-col items-center justify-center"
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <motion.div className="relative w-fit perspective-[1800px]">
          <div className="relative aspect-238/190 w-16 sm:w-20">
            <Image src={"/hero/folder.svg"} alt="" fill className="" />
          </div>

          {floating.map((e) => (
            <FloatingImage key={e.id} {...e} slug={slug} />
          ))}

          <div className="absolute inset-x-0 bottom-0 h-4/5 origin-bottom transform-[rotateX(var(--rx))] rounded-sm bg-[linear-gradient(0deg,rgb(235,235,235)_0%,rgb(250,250,250)_53.9432%,rgb(229,229,231)_100%)] shadow-[inset_0_2px_0_0_rgb(255,255,255)] transition-[transform,clip-path,filter] duration-300 ease-out will-change-transform [--rx:0deg] [--spread:0%] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] group-hover:[--rx:-65deg] group-hover:[--spread:6%] group-hover:[clip-path:polygon(calc(0%-var(--spread))_0%,calc(100%+var(--spread))_0%,100%_100%,0%_100%)] group-focus-visible:[--rx:-65deg] group-focus-visible:[--spread:6%] group-focus-visible:[clip-path:polygon(calc(0%-var(--spread))_0%,calc(100%+var(--spread))_0%,100%_100%,0%_100%)]" />
        </motion.div>

        <div className="mt-2 flex items-center gap-1.5 sm:mt-3">
          <span className={`aspect-square w-1.5 rounded-full ${color}`} />
          <span className="text-xs font-medium capitalize sm:text-[13px] 2xl:text-sm">
            {link}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
