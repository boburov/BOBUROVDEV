"use client";

import React from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Shukurullo Boburov – Fullstack JavaScript Developer</title>
        <meta
          name="description"
          content="Learn more about Shukurullo Boburov – a passionate Fullstack JavaScript Developer from Uzbekistan, specializing in React, Next.js, NestJS, and scalable system architecture."
        />
        <meta
          name="keywords"
          content="Shukurullo Boburov, Fullstack Developer Uzbekistan, React Developer, NestJS Expert, Next.js Developer, LangPro, Web Developer Portfolio"
        />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-[#141416] to-[#1f1f23] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            About <span className="text-indigo-400">Me</span>
          </h1>

          {/* Intro */}
          <p className="text-lg text-gray-300 leading-relaxed mb-10 text-center">
            Hi, I’m <span className="text-white font-semibold">Shukurullo Boburov</span> — a{" "}
            <span className="text-indigo-400">Fullstack JavaScript Developer</span> from Uzbekistan.  
            I specialize in building modern, scalable web applications that combine 
            beautiful design with powerful backend systems. My goal is simple: write clean, 
            efficient code that turns ambitious ideas into real-world digital products.
          </p>

          {/* Skills */}
          <div className="bg-[#1f1f23]/80 backdrop-blur-md border border-[#2b2b30] rounded-2xl p-6 mb-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">🚀 Technical Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300 text-sm">
              <li>✅ HTML, CSS, TailwindCSS</li>
              <li>✅ JavaScript (ES6+), TypeScript</li>
              <li>✅ React.js, Next.js</li>
              <li>✅ Node.js, NestJS</li>
              <li>✅ PostgreSQL, Prisma ORM</li>
              <li>✅ MongoDB, Redis</li>
              <li>✅ REST API & GraphQL</li>
              <li>✅ Telegram Bot Development</li>
              <li>✅ AWS S3, Bunny Storage</li>
              <li>✅ Authentication & JWT Security</li>
              <li>✅ Real-time Stats, Notifications</li>
              <li>✅ Certificate & Badge Systems</li>
              <li>✅ Docker & Deployment</li>
              <li>✅ UI/UX Prototyping (Figma)</li>
              <li>✅ Git, PM2, Linux Server</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-[#1f1f23]/80 backdrop-blur-md border border-[#2b2b30] rounded-2xl p-6 mb-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">💼 Experience & Projects</h2>
            <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm">
              <li>
                Developed a full-scale <span className="text-white">education platform</span> with 
                lesson tracking, vocabulary learning, quizzes, and gamified achievements.
              </li>
              <li>
                Created <span className="text-white">Telegram bots</span> for token validation, 
                interactive language practice, and personal task management.
              </li>
              <li>
                Implemented a <span className="text-white">certificate generation system</span> 
                with one-time exams and React-PDF integration.
              </li>
              <li>
                Migrated large-scale data between AWS S3 buckets using 
                <span className="text-white"> automated Prisma updates</span>.
              </li>
              <li>
                Built admin dashboards, Conky-based Linux panels, and 
                AI-powered lesson chat systems.
              </li>
              <li>
                Currently developing <span className="text-white">a Printify-style 
                print-on-demand startup</span> tailored for Uzbekistan.
              </li>
            </ul>
          </div>

          {/* Personal Touch */}
          <div className="bg-[#1f1f23]/80 backdrop-blur-md border border-[#2b2b30] rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">🌍 Beyond Code</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              I’m not just a coder — I’m someone driven by curiosity.  
              I’m passionate about startups, automation, and the philosophy of building 
              systems that make people’s lives easier.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I’m not writing code, I love exploring design ideas, reading about 
              technology trends, and learning English to connect globally.  
              My philosophy is simple: keep learning, keep building, and stay true to your passion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
