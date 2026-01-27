"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, Rocket, UserPlus } from "lucide-react";

// Assuming these images exist in public and are importable
import mardonbek from "../../public/mardonbek.png";
import muhammadali from "../../public/muhammadali.png";

const myTeam = [
  {
    img: mardonbek,
    name: "Mardonbek Khamidov",
    role: "React & TypeScript Engineer",
    description: "Expert in frontend architecture and client needs.",
    projects: 26,
  },
  {
    img: muhammadali,
    name: "Muhammadali Jamolov",
    role: "Next.js & UI Expert",
    description: "Crafting beautiful and performant user interfaces.",
    projects: 18,
  },
  {
    img: "https://avatars.githubusercontent.com/u/137058543?v=4", // Boburov
    name: "Boburov Shukurullo",
    role: "Fullstack Team Lead",
    description: "NestJS & Advanced Frontend Logic.",
    projects: 34,
  },
];

const Team = () => {
    return (
        <section className="py-24 container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div data-aos="fade-right">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Squad</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-lg">
                        Talented individuals I work with to deliver excellence.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {myTeam.map((member, idx) => (
                    <div 
                        key={idx} 
                        className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                         {/* Image Background */}
                         <div className="absolute inset-0">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                         </div>

                         {/* Content */}
                         <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-[10px] font-bold uppercase tracking-wider text-purple-200 backdrop-blur-md">
                                    {member.role}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                {member.name}
                                <BadgeCheck className="w-5 h-5 text-blue-400 fill-blue-400/10" />
                            </h3>
                            
                            <p className="text-gray-300 text-sm mt-3 line-clamp-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                {member.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                                <div className="text-white/80 font-mono text-sm">
                                    <Rocket className="w-4 h-4 inline mr-2 text-purple-400" />
                                    {member.projects} Projects
                                </div>
                                <button className="p-2 rounded-full bg-white text-black hover:bg-purple-400 transition-colors">
                                    <UserPlus size={18} />
                                </button>
                            </div>
                         </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Team;
