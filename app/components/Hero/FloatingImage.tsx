"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingImage({
  id,
  slug,
  rotateRest,
  rotateHover,
  hoverX,
  hoverY,
}: {
  id: number;
  slug: string;
  rotateRest: number;
  rotateHover: number;
  hoverX: number;
  hoverY: number;
}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 aspect-3/2 w-12 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm border border-zinc-50 shadow-lg will-change-transform sm:w-16"
      variants={{
        rest: { rotate: rotateRest, x: 0, y: -6 },
        hover: {
          rotate: rotateHover,
          x: hoverX,
          y: hoverY,
          transition: { type: "spring", stiffness: 200, damping: 25 },
        },
      }}
    >
      <Image
        src={`/floatingImage/${slug}-0${id}.png`}
        alt=""
        className="object-cover object-top"
        fill
        sizes="100vw"
        priority
      />
    </motion.div>
  );
}
