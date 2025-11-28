"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SiHashnode, SiSmugmug, SiNotion } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import FolderCard from "./FolderCard";
import ScrollingText from "./ScrollingText";

const folders = [
  { slug: "about", link: "about", color: "bg-pink-500" },
  { slug: "featured", link: "featured", color: "bg-amber-500" },
  { slug: "project", link: "projects", color: "bg-stone-500" },
  { slug: "post", link: "blog", color: "bg-blue-500" },
];

export default function Hero() {
  const [visitorName, setVisitorName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("visitorName");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedName) setVisitorName(savedName);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVisitorName(value);
    localStorage.setItem("visitorName", value);
  };

  return (
    <section id="hero">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-full w-full">
          <Image
            src={"/hero/hero-bg.svg"}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-0 w-full">
          <div className="mx-auto flex items-center justify-between px-5 py-8 lg:px-20 2xl:px-40">
            <Link href={"/"}>
              <h1 className="text-xl font-semibold tracking-tighter text-zinc-800 2xl:text-2xl">
                J.Portfolio
              </h1>
            </Link>

            <input
              type="text"
              placeholder="What's your name?"
              value={visitorName}
              onChange={handleChange}
              className="hidden min-w-96 rounded-md border border-black/10 bg-black/5 px-4 py-2 text-[13px] outline-none md:block"
            />
            <ul className="flex items-center space-x-8 text-xl text-zinc-600 2xl:text-2xl">
              <li className="cursor-pointer transition-all duration-200 active:scale-90">
                <Link
                  href={"https://github.com/jeonqeun"}
                  target="_blank"
                  className=""
                >
                  <LuGithub />
                </Link>
              </li>
              <li className="cursor-pointer transition-all duration-200 active:scale-90">
                <Link href={"https://jeongeun.hashnode.dev"} target="_blank">
                  <SiHashnode />
                </Link>
              </li>
              <li className="cursor-pointer transition-all duration-200 active:scale-90">
                <Link href={""} target="_blank">
                  <SiNotion />
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-5 md:hidden">
            <input
              type="text"
              placeholder="What's your name?"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              className="w-full rounded-md border border-black/10 bg-black/5 px-4 py-2 text-[13px] outline-none"
            />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-5 lg:w-fit">
          <div className="mx-auto flex flex-col items-start justify-center">
            <div className="mb-8">
              <div className="mb-4 space-x-1.5 text-lg md:text-xl">
                <span className="text-[#878787]">HI</span>
                <span className="font-medium">
                  {visitorName ? visitorName : "STRANGER"}
                </span>
                <span className="inline-block">
                  <SiSmugmug />
                </span>
              </div>
              <div className="mb-8 text-6xl font-medium tracking-tighter text-zinc-800 sm:text-7xl md:text-8xl">
                <div className="mb-1.5 flex items-center gap-3 md:gap-8">
                  <span>I&apos;m</span>
                  <span>Jeongeun,</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3 md:gap-8">
                  <div className="mb-1.5 flex items-center gap-3 md:gap-8">
                    <span>Building</span>
                    <span>Web</span>
                  </div>
                  <span>UI.</span>
                </div>
              </div>
              <p className="text-base text-zinc-700 md:text-lg">
                안녕하세요. 의미 있는 사용자 경험을 설계하는 웹 퍼블리셔
                이정은입니다.
              </p>
            </div>
            <div className="flex items-center gap-6 sm:gap-12 xl:hidden">
              {folders.map((folder) => (
                <FolderCard key={folder.link} {...folder} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 xl:absolute xl:top-1/2 xl:left-20 xl:flex xl:-translate-y-1/2 xl:flex-col 2xl:left-40 2xl:gap-10">
          {folders.map((folder) => (
            <FolderCard key={folder.link} {...folder} />
          ))}
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="flex flex-wrap items-center justify-between px-5 pb-10 text-[#878787] lg:px-20 2xl:px-40">
            <p>2025 Web Publisher Portfolio</p>
            <p>
              © 2025 <span className="text-[#F67373]">Jeongeun Lee</span>.
              Built with Next.js, deployed on Vercel.
            </p>
          </div>
        </div>

        <ScrollingText />
      </div>
    </section>
  );
}
