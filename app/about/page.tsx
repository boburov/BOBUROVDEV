"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    "HTML, CSS, TailwindCSS",
    "JavaScript (ES6+), TypeScript",
    "React.js, Next.js",
    "Node.js, NestJS",
    "PostgreSQL, Prisma ORM",
    "MongoDB, Redis",
    "REST API & GraphQL",
    "Telegram Bot Development",
    "AWS S3, Bunny Storage",
    "Authentication & JWT Security",
    "Docker & Deployment",
    "Git, PM2, Linux Server"
  ];

  return (
    <>
      <Head>
        <title>About | Shukurullo Boburov – Fullstack JavaScript Developer</title>
        <meta
          name="description"
          content="Learn more about Shukurullo Boburov – a passionate Fullstack JavaScript Developer from Uzbekistan, specializing in React, Next.js, NestJS, and scalable system architecture."
        />
      </Head>

      <section className="container py-20 relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16" data-aos="fade-up">
             <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-purple-300 uppercase mb-4">
                Who I Am
             </span>
             <h1 className="text-4xl md:text-6xl font-extrabold montbold text-white tracking-tight">
               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Me</span>
             </h1>
          </div>

          {/* Intro Card */}
          <div 
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 shadow-2xl mb-10 relative overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
             <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light relative z-10">
                Hi, I’m <span className="font-bold text-white">Shukurullo Boburov</span> — a{" "}
                <span className="text-indigo-400 font-semibold">Fullstack JavaScript Developer</span> from Uzbekistan.
                I specialize in building modern, scalable web applications that combine
                beautiful design with powerful backend systems. My goal is simple: write clean,
                efficient code that turns ambitious ideas into real-world digital products.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Skills */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl h-full" data-aos="fade-right">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/20 text-xl">🚀</span> 
                    Technical Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                        <span 
                            key={idx}
                            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
              </div>

              {/* Experience */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl h-full" data-aos="fade-left">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/20 text-xl">💼</span> 
                    Projects & Exp
                </h2>
                <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>Developed a full-scale <span className="text-white font-medium">education platform</span> with lesson tracking and gamification.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>Created <span className="text-white font-medium">Telegram bots</span> for interactive language practice and validation.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>Implemented <span className="text-white font-medium">certificate generation</span> systems with React-PDF.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>Migrated large-scale data between AWS S3 buckets using automated scripts.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>Developed <span className="text-white font-medium">Printify-style</span> startup POC for local market.</span>
                    </li>
                </ul>
              </div>
          </div>

          {/* Beyond Code */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 text-center shadow-2xl" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-white mb-4">🌍 Beyond Code</h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              I’m not just a coder — I’m driven by curiosity. When I’m not building systems, 
              I love exploring design trends, reading about tech philosophy, and connecting globally. 
              <br/>
              <span className="text-purple-300 block mt-2 font-medium">Keep learning, keep building.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutPage;

