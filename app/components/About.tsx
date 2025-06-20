"use client";

import { Github, Instagram, Send } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImg from "../assets/office.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="about" className="bg-[#e4e4e4] py-24">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col gap-16">
        <h2
          className="text-4xl font-bold text-[#0f0f0f] tracking-tight max-md:text-2xl"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1">
          <div
            data-aos="fade-up"
            className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm"
          >
            <Image
              src={aboutImg}
              alt="Office work"
              className="object-cover w-full h-full transition duration-700 ease-in-out"
            />
          </div>

          <div data-aos="fade-left" className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-[#1c1c1c] leading-snug max-md:text-xl">
              Frontend Developer based in Chinabad, Uzbekistan
            </h3>

            <p className="text-gray-700 text-base leading-relaxed text-justify max-md:text-sm">
              I’m{" "}
              <span className="text-[#0f0f0f] font-semibold">
                Boburov Shukurullo
              </span>{" "}
              - Frontend React Developer with a passion for building modern and
              user-friendly e-commerce websites. My expertise lies in React.js,
              JavaScript, and frontend development, and I enjoy working with
              Tailwind CSS to create visually appealing designs. Beyond frontend
              development, I have a strong interest in MERN stack development,
              including Node.js and Vue.js, as I aim to expand my skill set.
              Currently, I am working towards reaching a senior-level
              proficiency in programming by the end of the year, alongside
              improving my English to an upper-intermediate level.
            </p>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#0f0f0f] font-semibold">
                Connect with me
              </span>
              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/Boburov-Shukurillo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
                >
                  <Github className="w-5 h-5 text-[#1c1c1c]" />
                </a>
                <a
                  href="https://t.me/BOBUROV_SHUKURILLO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
                >
                  <Send className="w-5 h-5 text-[#1c1c1c]" />
                </a>
                <a
                  href="http://instagram.com/boburov.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
                >
                  <Instagram className="w-5 h-5 text-[#1c1c1c]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
