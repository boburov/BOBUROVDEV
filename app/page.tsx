"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ink from "./assets/ink.webp";
import Image from "next/image";
import Header from "./components/Header";

import { Code, MousePointer, Rocket, Zap } from "lucide-react";
import Projects from "./components/Projects";
import About from "./components/About";
import Ability from "./components/Ability";
import Contact from "./components/Temp";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <>
      <Header />

      <section className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 gap-14 py-28 items-center max-md:grid-cols-1">
        <div className="flex flex-col gap-8 max-md:text-center">
          <h1
            className="text-5xl max-md:text-3xl font-bold text-[#0f0f0f] leading-tight"
            data-aos="fade-right"
          >
            I Build Fast, Functional & Beautiful Interfaces
          </h1>

          <div
            className="text-gray-600 text-lg max-md:text-base leading-relaxed space-y-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p>
              {`I’m`} <strong className="text-black">Boburov Shukurullo</strong>{" "}
              — a frontend engineer crafting fast, scalable, and elegant user
              interfaces with a strong focus on real-world usability.
            </p>
            <p>
              I specialize in{" "}
              <span className="inline-flex items-center gap-1 text-black font-medium">
                <Code className="w-4 h-4" /> React.js
              </span>
              ,{" "}
              <span className="inline-flex items-center gap-1 text-black font-medium">
                <Zap className="w-4 h-4" /> JavaScript
              </span>{" "}
              and{" "}
              <span className="inline-flex items-center gap-1 text-black font-medium">
                <MousePointer className="w-4 h-4" /> Tailwind CSS
              </span>
              . My goal? Build pixel-perfect, intuitive products that **people
              enjoy using**.
            </p>
          </div>

          <div
            className="text-sm font-semibold text-gray-800 cursor-pointer border-t border-gray-300 pt-4 w-fit max-md:mx-auto hover:opacity-80 transition-opacity flex items-center gap-2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Rocket className="w-4 h-4" />
            EXPLORE TECH STACK
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="relative max-md:mt-10 max-md:mx-auto max-md:w-3/4"
        >
          <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-tr from-purple-200 via-white to-indigo-100 blur-2xl opacity-60"></div>

          <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white/10 backdrop-blur-xl transition-transform hover:scale-[1.01] duration-500">
            <Image
              src={ink}
              alt="Ink Texture"
              className="w-full h-auto object-cover transition duration-700 ease-in-out"
            />

            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full shadow-lg tracking-wide uppercase">
              Inspired by Real UX
            </div>
          </div>
        </div>
      </section>

      <About />

      <Ability />

      <Projects />

      <Contact />
    </>
  );
};

export default Home;
