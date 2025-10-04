"use client";

import { Code2, Database, Bot, Palette, Globe, Boxes } from "lucide-react";

const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      items: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      icon: <Database className="w-6 h-6 text-green-400" />,
      items: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM"],
    },
    {
      category: "Bot Development",
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      items: ["Telegram Bot (Node.js, Telegraf, nestjs-telegraf)", "AI Chat Integration", "Daily Quiz Bots"],
    },
    {
      category: "System & DevOps",
      icon: <Boxes className="w-6 h-6 text-orange-400" />,
      items: ["Ubuntu/Linux", "VPS Deployment", "AWS S3 File Migration", "Conky System Monitoring"],
    },
    {
      category: "Design & Tools",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      items: ["Figma", "Minimalist UI/UX", "Shadcn/UI", "Lucide-react Icons"],
    },
    {
      category: "Other Skills",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      items: ["CRM Platform Development", "Print-on-Demand Platform (Printify style)", "SEO Optimization", "REST API", "Unit Testing"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a1d] to-[#2b2b30] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My Skills
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Technologies and tools I’ve mastered throughout my journey.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2b2b30] p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h2 className="text-xl font-semibold">{skill.category}</h2>
              </div>
              <ul className="space-y-2 text-gray-300">
                {skill.items.map((item, i) => (
                  <li key={i} className="hover:text-white transition-colors">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;
