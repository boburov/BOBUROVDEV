"use client";

import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="flex flex-col gap-12 mb-20">
             <h2 className="text-maximal leading-none text-white uppercase break-all">
                Let&apos;s <span className="text-gray-800">build</span>
                <br />
                <span className="text-gradient">Something.</span>
             </h2>
             
             <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between">
                <div>
                    <span className="text-gray-500 text-sm uppercase tracking-widest block mb-4">Say Hello</span>
                    <a href="mailto:info@boburov.uz" className="text-3xl md:text-5xl font-bold text-white hover:text-purple-400 transition-colors flex items-center gap-4 group">
                        info@boburov.uz
                        <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
                    </a>
                </div>

                <div className="flex gap-4">
                    <SocialLink href="https://github.com/boburov" icon={<Github />} />
                    <SocialLink href="https://linkedin.com/in/boburovdev" icon={<Linkedin />} />
                    <SocialLink href="https://twitter.com" icon={<Twitter />} />
                </div>
             </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Boburov Shukurullo. All rights reserved.</p>
            <p className="flex items-center gap-1">
                Made with <span className="text-red-500">♥</span> & Next.js
            </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-110 transition-all">
            {icon}
        </a>
    )
}
