"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { scrollPage } from "../functions/scrollUp";
import { Menu } from "lucide-react";
import Link from "next/link";
import { link } from "fs";

const navItems = [
  { label: "Home", pos: 0, link: "/" },
  { label: "About", pos: 0, link: "about" },
  { label: "Projects", pos: 0, link: "projects" },
  { label: "Skills", pos: 0, link: "ability" },
  { label: "Blog", pos: 0, link: "blog" },
  { label: "Contact", pos: 0, link: "contact" },
];

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const scrollToPosition = (pos: number) => {
    scrollPage(pos);
    setModalOpen(false);
  };

  return (
    <header className="mt-3 container bg-gradient-to-t from-[#2b2b30]/90 via-[#2b2b30]/80 to-[#2b2b30]/50 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-lg flex items-center justify-between">
      <Link href={"/"}>
        <h1
          data-aos="fade-right"
          className="text-xl md:text-2xl font-bold text-white tracking-tight"
        >
          <span className="text-indigo-400">BOBUROV</span>.DEV
        </h1>
      </Link>
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-200">
        {navItems.map(({ label, pos, link }, index) => (
          <Link key={index} href={`${link === undefined ? "" : link}`}>
            <NavItem
              key={label}
              label={label}
              scrollTo={() => scrollToPosition(pos)}
            />
          </Link>
        ))}
        <TalkButton />
      </nav>

      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="focus:outline-none"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile dropdown */}
      {modalOpen && (
        <div className="absolute top-full mt-2 left-0 w-full rounded-b-2xl bg-[#1a1a1d] backdrop-blur-xl border-t border-white/10 shadow-md md:hidden z-40">
          <ul className="flex flex-col px-6 py-4 text-white text-sm font-medium space-y-4">
            {navItems.map(({ label, pos }) => (
              <li
                key={label}
                onClick={() => scrollToPosition(pos)}
                className="cursor-pointer uppercase tracking-wide hover:text-indigo-400 transition"
              >
                {label}
              </li>
            ))}
            <li>
              <TalkButton fullWidth />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const NavItem = ({
  label,
  scrollTo,
}: {
  label: string;
  scrollTo: () => void;
}) => (
  <span
    onClick={scrollTo}
    className="cursor-pointer relative group uppercase tracking-wide hover:text-indigo-400 transition"
  >
    {label}
    <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-indigo-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
  </span>
);

const TalkButton = ({ fullWidth = false }: { fullWidth?: boolean }) => (
  <button
    className={`uppercase tracking-wide px-5 py-2 border border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white transition rounded-full ${
      fullWidth ? "w-full mt-2" : ""
    }`}
  >
    Work with Me
  </button>
);

export default Header;
