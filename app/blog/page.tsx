"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Repeat2, Heart, Share, MoreHorizontal, Search } from "lucide-react";
import posts from "./posts.json";

export default function BlogPage() {
  return (
    <div className="min-h-screen mt-10 rounded-2xl bg-[#0b0f17] text-[#e0e0e0] flex justify-center font-sans selection:bg-blue-500/30">
      
      {/* Feed Column */}
      <main className="w-full max-w-[700px] border border-white/5 min-h-screen rounded-2xl">


        {/* Pinned / Welcome Post */}
        <div className="p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-200 cursor-pointer">
            <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                    <Image
                        src="https://avatars.githubusercontent.com/u/137058543?v=4"
                        alt="Profile"
                        width={48}
                        height={48}
                        className="rounded-full shadow-lg"
                        unoptimized
                    />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="flex items-baseline justify-between">
                         <div className="flex items-center gap-2 group">
                             <span className="font-bold text-[15px] text-white group-hover:underline decoration-white/30 underline-offset-4">Boburov Shukurullo</span>
                             <span className="text-gray-500 text-[14px]">@boburovdev</span>
                             <span className="text-gray-600 text-[14px] px-1">·</span>
                             <span className="text-gray-500 text-[14px]">Pinned</span>
                         </div>
                    </div>
                    
                    <p className="text-[15px] leading-relaxed text-gray-300 font-normal">
                        Welcome to my digital garden. 🌱 <br />
                        Here I document my journey in software engineering, share insights on <span className="text-blue-400">Next.js</span> & <span className="text-purple-400">NestJS</span>, and occasionally drop some design thoughts.
                        <br/><br/>
                        Less noise, more signal.
                    </p>

                    {/* Stats / Interactions */}
                     <div className="flex justify-between items-center pt-2 max-w-[420px] text-gray-500">
                        <ActionButton icon={<MessageCircle className="w-[18px] h-[18px]" />} count={12} color="group-hover:text-blue-400" bg="group-hover:bg-blue-500/10" />
                        <ActionButton icon={<Repeat2 className="w-[18px] h-[18px]" />} count={4} color="group-hover:text-green-400" bg="group-hover:bg-green-500/10" />
                        <ActionButton icon={<Heart className="w-[18px] h-[18px]" />} count={89} color="group-hover:text-pink-500" bg="group-hover:bg-pink-500/10" />
                        <ActionButton icon={<Share className="w-[18px] h-[18px]" />} color="group-hover:text-blue-400" bg="group-hover:bg-blue-500/10" />
                     </div>
                </div>
            </div>
        </div>

        {/* Post Feed */}
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-200 cursor-pointer"
          >
            <div className="flex gap-4">
               {/* Avatar */}
               <div className="shrink-0 pt-1">
                  <Image
                      src="https://avatars.githubusercontent.com/u/137058543?v=4" 
                      alt={post.author}
                      width={48}
                      height={48}
                      className="rounded-full opacity-90 hover:opacity-100 transition-opacity"
                      unoptimized
                  />
               </div>

               {/* Content Content */}
               <div className="flex-1 min-w-0 space-y-2"> 
                  {/* Header */}
                  <div className="flex items-center gap-2 flex-wrap">
                       <span className="font-bold text-[15px] text-white hover:underline decoration-white/30 underline-offset-4">{post.author}</span>
                       <span className="text-gray-500 text-[14px]">@boburovdev</span>
                       <span className="text-gray-600 text-[14px] px-1">·</span>
                       <span className="text-gray-500 text-[14px]">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>

                  {/* Body */}
                  <div className="text-[15px] leading-relaxed text-gray-300 whitespace-pre-line font-normal">
                      <p className="font-semibold text-white/90 mb-1 block">{post.title}</p>
                      {post.excerpt}
                  </div>

                  {/* Image Attachment */}
                  {post.imageUrl && (
                      <div className="mt-3 rounded-2xl overflow-hidden border border-white/10 relative w-full aspect-video shadow-2xl shadow-black/50">
                          <Image
                              src={post.imageUrl}
                              alt={post.title}
                              fill
                              className="object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
                              unoptimized
                          />
                      </div>
                  )}

                  {/* Actions */}
                   <div className="flex justify-between items-center pt-3 max-w-[420px] text-gray-500">
                      <ActionButton icon={<MessageCircle className="w-[18px] h-[18px]" />} count={Math.floor(Math.random() * 20)} color="group-hover:text-blue-400" bg="group-hover:bg-blue-500/10" />
                      <ActionButton icon={<Repeat2 className="w-[18px] h-[18px]" />} count={Math.floor(Math.random() * 5)} color="group-hover:text-green-400" bg="group-hover:bg-green-500/10" />
                      <ActionButton icon={<Heart className="w-[18px] h-[18px]" />} count={Math.floor(Math.random() * 200)} color="group-hover:text-pink-500" bg="group-hover:bg-pink-500/10" />
                      <ActionButton icon={<Share className="w-[18px] h-[18px]" />} color="group-hover:text-blue-400" bg="group-hover:bg-blue-500/10" />
                   </div>
               </div>
            </div>
          </article>
        ))}
        
        {/* End of feed indicator */}
        <div className="py-12 text-center text-sm text-gray-600">
            You're all caught up.
        </div>
      </main>
      
      {/* Right Sidebar (Desktop) */}
      <aside className="hidden lg:block w-[350px] pl-8 py-6 relative">
          <div className="sticky top-6 space-y-6">
              
              {/* Search */}
              <div className="group bg-[#16181c] focus-within:bg-black focus-within:ring-1 focus-within:ring-blue-500/50 rounded-full py-2.5 px-5 border border-white/5 flex items-center gap-3 transition-all duration-200">
                  <Search className="w-4 h-4 text-gray-500 group-focus-within:text-blue-400" />
                  <input placeholder="Search posts" className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full" />
              </div>

              {/* Suggestions */}
              <div className="bg-[#16181c] rounded-2xl p-4 border border-white/5 space-y-4">
                  <h2 className="font-bold text-lg text-white mb-2">Relevant Topics</h2>
                  
                  <TopicItem topic="Next.js 15" posts="2.4k posts" />
                  <TopicItem topic="UI Engineering" posts="1.8k posts" />
                  <TopicItem topic="System Design" posts="942 posts" />
              </div>
          </div>
      </aside>
    </div>
  );
}

function ActionButton({ icon, count, color, bg }: { icon: React.ReactNode, count?: number, color: string, bg: string }) {
    return (
        <button className="group flex items-center gap-1.5 transition-colors outline-none">
            <div className={`p-2 rounded-full transition-colors ${bg} text-inherit`}>
                <div className={`transition-colors ${color}`}>{icon}</div>
            </div>
            {count !== undefined && <span className={`text-xs font-medium transition-colors ${color}`}>{count}</span>}
        </button>
    )
}

function TopicItem({ topic, posts }: { topic: string, posts: string }) {
    return (
        <div className="flex justify-between items-center cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
            <div>
                 <p className="text-sm font-bold text-white/90">{topic}</p>
                 <p className="text-xs text-gray-500">{posts}</p>
            </div>
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </div>
    )
}
