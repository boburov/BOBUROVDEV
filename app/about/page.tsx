"use client";

import React from "react";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1a1a1d] to-[#2b2b30] text-white py-16 px-6">
      <div className="container">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          About <span className="text-indigo-400">Me</span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10 text-center">
          Hey 👋, my name is <span className="text-white font-semibold">Shukurullo Boburov</span>.  
          I’m a passionate <span className="text-indigo-400">Fullstack JavaScript Developer</span> 
          from Uzbekistan. My main focus is building modern, scalable and 
          production-ready applications with clean design and powerful backend logic.  
        </p>

        {/* Skills Section */}
        <div className="bg-[#2b2b30]/80 backdrop-blur-md border border-[#3a3a3f] rounded-2xl p-6 mb-10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">🚀 My Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300 text-sm">
            <li>✅ HTML, CSS, TailwindCSS</li>
            <li>✅ JavaScript (ES6+), TypeScript</li>
            <li>✅ React.js, Next.js</li>
            <li>✅ Node.js, NestJS</li>
            <li>✅ PostgreSQL, Prisma ORM</li>
            <li>✅ MongoDB</li>
            <li>✅ REST API, GraphQL</li>
            <li>✅ Telegram Bot Development</li>
            <li>✅ AWS S3 (file migration, storage)</li>
            <li>✅ Authentication & JWT Security</li>
            <li>✅ Real-time Stats & Notifications</li>
            <li>✅ Certificates & Badge Systems</li>
            <li>✅ Docker Basics</li>
            <li>✅ UI/UX with Figma</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="bg-[#2b2b30]/80 backdrop-blur-md border border-[#3a3a3f] rounded-2xl p-6 mb-10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">💼 What I’ve Worked On</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Over the past years, I’ve worked on multiple projects including:
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm">
            <li>
              Built a <span className="text-white">CRM-style education platform</span> 
              with full activity tracking, lessons, quizzes, vocabulary learning, 
              and a rewards/badge system.
            </li>
            <li>
              Implemented <span className="text-white">Telegram bots</span> for 
              language learning, token validation, and interactive todo lists.
            </li>
            <li>
              Developed a <span className="text-white">certificate awarding system</span> 
              with one-time final tests and PDF generation.
            </li>
            <li>
              Migrated files between AWS S3 buckets with 
              <span className="text-white"> automated Prisma updates</span>.
            </li>
            <li>
              Created dashboards, Conky-based desktop panels, and activity trackers.
            </li>
            <li>
              Started working on a <span className="text-white">Printify-style 
              print-on-demand startup</span> for Uzbekistan.
            </li>
          </ul>
        </div>

        {/* Personal Section */}
        <div className="bg-[#2b2b30]/80 backdrop-blur-md border border-[#3a3a3f] rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">🌍 A Little More About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Beyond coding, I’m someone who’s curious about 
            <span className="text-white"> design, startups, and automation</span>.  
            I love experimenting with new technologies and bringing ideas to life.  
          </p>
          <p className="text-gray-300 leading-relaxed">
            Also, I’m deeply passionate about personal growth, 
            learning English fluently, and connecting with people 
            who share the same fire for building and creating.  
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
