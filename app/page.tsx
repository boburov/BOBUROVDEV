"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ink from "./assets/profilepic.jpg";
import Image from "next/image";

import {
  Code, Download, Plus, Rocket, VerifiedIcon,
} from "lucide-react";

import Header from "./components/Header";
import mardonbek from '../public/mardonbek.jpg'
import muhammadali from '../public/muhammadali.jpeg'
import Projects from "./components/Projects";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    { name: "HTML", icon: "html", status: "success" },
    { name: "CSS", icon: "css", status: "success" },
    { name: "Tailwind", icon: "tailwind", status: "success" },
    { name: "JavaScript", icon: "js", status: "success" },
    { name: "TypeScript", icon: "ts", status: "process" },
    { name: "React", icon: "react", status: "success" },
    { name: "Next.js", icon: "nextjs", status: "process" },
    { name: "Node.js", icon: "nodejs", status: "process" },
    { name: "NestJS", icon: "nestjs", status: "process" },
    { name: "Git", icon: "git", status: "success" },
    { name: "NPM", icon: "npm", status: "success" },
    { name: "MUI", icon: "mui", status: "success" },
    { name: "Figma", icon: "figma", status: "success" },
  ];

  const myTeam = [
    {
      img: mardonbek,
      name: "Mardonbek Khamidov",
      description: "React va TypeScript muhandisi. Mijozlar ehtiyojini tezda anglaydi.",
      projects: 26
    },
    {
      img: muhammadali,
      name: "Muhammadali Jamolov",
      description: "Next.js va UI dizayn mutaxassisi. Tajribali va samarali.",
      projects: 18
    },
    {
      img: ink,
      name: "Boburov Shukurullo",
      description: "NestJS va Frontend texnologiyalar bo‘yicha kuchli fullstack dasturchi.",
      projects: 34
    }
  ];

  return (
    <>
      <Header />

      <section className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white mt-20">

        <div
          className="bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#3a3a3f]"
          data-aos="fade-up"
        >
          <div className="w-full flex gap-4 items-center">
            <Image src={ink} alt="profile img" className="rounded-full w-16 h-16 object-cover" />
            <div className="h-20 flex flex-col justify-center">
              <h2 className="text-xl font-bold montbold">Boburov Shukurullo</h2>
              <p>@boburov</p>
            </div>
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-400">Full Stack Developer</p>
          <p className="text-sm text-gray-400 montmed mb-4">
            I build clean & functional web apps using NestJS, Next.js and TailwindCSS
          </p>
          <div className="grid grid-cols-7 gap-2">
            {skills.map((skill, index) => {
              return <div key={index} className="bg-white p-1 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <img src={` https://skillicons.dev/icons?i=${skill.icon}`} alt="salom" />
              </div>
            })}
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 items-center justify-center "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl text-center w-full h-full flex flex-col items-center justify-center shadow-xl  border border-[#3a3a3f]">
            <h3 className="text-2xl font-bold text-indigo-400 montbold">+3</h3>
            <p className="text-sm text-gray-400 montmed">Yillik Tajriba</p>
          </div>
          <div className="bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl text-center w-full h-full flex flex-col items-center justify-center shadow-xl  border border-[#3a3a3f]">
            <h3 className="text-2xl font-bold text-indigo-400 montbold">+100</h3>
            <p className="text-sm text-gray-400 montmed">Loyihalar</p>
          </div>
          <div className="bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl text-center w-full h-full flex flex-col items-center justify-center shadow-xl  border border-[#3a3a3f]">
            <Rocket className="mx-auto text-indigo-400" />
            <p className="text-sm text-gray-400 mt-1 montmed">Tez yetkazish</p>
          </div>
          <div className="bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl text-center w-full h-full flex flex-col items-center justify-center shadow-xl  border border-[#3a3a3f]">
            <Code className="mx-auto text-indigo-400" />
            <p className="text-sm text-gray-400 mt-1 montmed">Toza Kod</p>
          </div>
        </div>

        <div
          className="bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-[#3a3a3f]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <p className="uppercase text-gray-400 text-xs tracking-widest mb-3">Keling birga ishlaylik</p>
            <h2 className="text-2xl font-extrabold leading-snug mb-4 text-balance montbold">
              {`Let's `}<span className="text-indigo-400">work</span> together.
            </h2>
            <p className="text-sm text-gray-400 mb-6 montmed">
              {"We bring your ideas to life with powerful technology."}
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              download
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-full text-sm font-medium transition montmed flex items-center gap-2 text-white"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-indigo-400 px-4 py-2 rounded-full text-sm font-medium transition montmed text-white"
            >
              Talk with Me
            </a>
          </div>
        </div>

      </section>


      <section className="container mx-auto py-5">
        <div className="flex gap-8 items-start">
          <div className="w-[90%] grid grid-cols-1 md:grid-cols-3 gap-6">
            {myTeam.map((guy, index) => (
              <div
                key={index}
                className="relative h-[400px] rounded-2xl overflow-hidden group shadow-xl border border-neutral-800 bg-neutral-900"
              >
                <Image
                  src={guy.img}
                  alt={guy.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-2 left-0 right-0 h-48 z-10 pointer-events-none">
                  <div className="w-[94%] mx-auto h-full rounded-xl bg-gradient-to-t from-[#2b2b30]/90 via-[#2b2b30]/80 to-[#2b2b30]/50 backdrop-blur-xl border-b-2 border-x-2 border-white/10" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-20 text-white space-y-2">
                  <h2 className="text-base font-semibold flex items-center gap-2 break-words">
                    {guy.name}
                    <VerifiedIcon className="w-5 h-5 fill-white stroke-black" strokeWidth={1} />
                  </h2>

                  <p className="text-xs text-white/80 leading-normal line-clamp-3">
                    {guy.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white/60">
                      <Rocket className="inline mr-1 text-indigo-400 w-4 h-4" />
                      {guy.projects}+ loyiha
                    </p>

                    <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-semibold rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white hover:bg-white/20 transition">
                      Follow <Plus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[30%] hidden md:flex flex-col gap-4">
            <div className="w-full bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#3a3a3f] flex items-center gap-4">
              Languages |
              <img src="https://flagcdn.com/w40/uz.png" alt="Oʻzbekcha" className="w-6 h-4 rounded-sm shadow-sm" />
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 rounded-sm shadow-sm" />
            </div>

            <div className="w-full bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#3a3a3f] text-white">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <ul className="space-y-1 text-sm text-white/80">
                <li>Frontend Mastery – WebKing</li>
                <li>Backend (NestJS, PostgreSQL)</li>
                <li>Design & UX – Youtube</li>
              </ul>
            </div>

            <div className="w-full bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#3a3a3f] text-white">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <ul className="space-y-1 text-sm text-white/80">
                <li>Email: boburovdev@gmail.com</li>
                <li>Telegram: @boburovdev</li>
                <li>Phone: +998 20 002-04-46</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Projects />
    </>
  );
};

export default Home;
