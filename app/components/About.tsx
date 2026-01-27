"use client";

import React from "react";

const About = () => {
  return (
    <section className="container py-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Languages */}
            <div data-aos="fade-right" className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-white select-none pointer-events-none group-hover:scale-110 transition-transform">
                    AZ
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Languages</h3>
                 <div className="flex flex-col gap-4">
                     <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                         <div className="flex items-center gap-3">
                            <span className="text-4xl">🇺🇿</span>
                            <div>
                                <div className="font-bold text-white">Uzbek</div>
                                <div className="text-xs text-gray-400">Native</div>
                            </div>
                         </div>
                         <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                             <div className="w-full h-full bg-green-500" />
                         </div>
                     </div>
                     <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                         <div className="flex items-center gap-3">
                            <span className="text-4xl">🇬🇧</span>
                            <div>
                                <div className="font-bold text-white">English</div>
                                <div className="text-xs text-gray-400">Advanced</div>
                            </div>
                         </div>
                         <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                             <div className="w-[85%] h-full bg-blue-500" />
                         </div>
                     </div>
                 </div>
            </div>

            {/* Education */}
            <div data-aos="fade-left" className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-white select-none pointer-events-none group-hover:scale-110 transition-transform">
                    EDU
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Education</h3>
                 <ul className="space-y-6 relative z-10">
                     <li className="relative pl-6 border-l-2 border-purple-500/30">
                         <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-black" />
                         <div className="font-bold text-lg text-white">Frontend Mastery</div>
                         <div className="text-purple-300 text-sm">WebKing Academy</div>
                     </li>
                     <li className="relative pl-6 border-l-2 border-purple-500/30">
                         <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-black" />
                         <div className="font-bold text-lg text-white">Backend Engineering</div>
                         <div className="text-indigo-300 text-sm">NestJS, PostgreSQL Architecture</div>
                     </li>
                     <li className="relative pl-6 border-l-2 border-purple-500/30">
                         <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 ring-4 ring-black" />
                         <div className="font-bold text-lg text-white">Self Taught</div>
                         <div className="text-pink-300 text-sm">Youtube, Documentation, OSS</div>
                     </li>
                 </ul>
            </div>

        </div>
    </section>
  );
};

export default About;
