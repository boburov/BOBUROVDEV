"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { scrollPage } from "../functions/scrollUp";
import menuIcon from "../assets/icons/menu.svg";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const ScroollDown = (pos: number) => {
    scrollPage(pos);
    setModalOpen(false);
  };

  return (
    <header
      className="mt-3 container py-3 
      bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md flex items-center justify-between"
    >
      <h1
        data-aos="fade-right"
        className="text-2xl font-bold text-black tracking-tight"
      >
        BOBUROV.DEV
      </h1>

      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="md:hidden focus:outline-none"
      >
        <img src={menuIcon} alt="Menu" className="w-6 h-6" />
      </button>

      <nav
        data-aos="fade-left"
        className="hidden md:flex space-x-8 font-medium text-gray-900"
      >
        {navItems.map(({ label, pos }) => (
          <NavItem key={label} label={label} scrollTo={pos} />
        ))}
      </nav>

      {modalOpen && (
        <div className="absolute top-full mt-2 left-0 w-full rounded-b-2xl bg-white/70 backdrop-blur-md border-t border-white/30 shadow-md md:hidden">
          <ul className="flex flex-col space-y-3 px-6 py-4 text-gray-900 font-medium">
            {navItems.map(({ label, pos }) => (
              <li
                key={label}
                onClick={() => ScroollDown(pos)}
                className="cursor-pointer hover:opacity-80 transition"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ label, scrollTo }: { label: string; scrollTo: number }) => (
  <span
    onClick={() => scrollPage(scrollTo)}
    className="cursor-pointer relative group text-sm tracking-wide uppercase hover:opacity-80 transition"
  >
    {label}
    <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-black group-hover:w-full transition-all duration-300"></span>
  </span>
);

const navItems = [
  { label: "Home", pos: 0 },
  { label: "About", pos: 700 },
  { label: "Projects", pos: 1500 },
  { label: "Skills", pos: 2850 },
  { label: "Contact", pos: 3800 },
];

export default Header;
