"use client";

import { motion } from "framer-motion";

export default function ScrollingText() {
  return (
    <div className="absolute -bottom-20 left-0 -z-10 flex w-full items-center overflow-hidden text-[400px] font-extrabold -tracking-widest text-transparent opacity-4">
      <div
        className="flex whitespace-nowrap"
        style={{
          WebkitTextStroke: "2px black",
        }}
      >
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80,
          }}
        >
          <span>Jeongeunleeportfolio</span>
          <span>Jeongeunleeportfolio</span>
          <span>Jeongeunleeportfolio</span>
        </motion.div>

        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80,
          }}
        >
          <span>jeongeunleeportfolio</span>
          <span>jeongeunleeportfolio</span>
          <span>jeongeunleeportfolio</span>
        </motion.div>
      </div>
    </div>
  );
}
