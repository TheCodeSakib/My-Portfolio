import React from "react";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiVercel, SiNetlify, SiNpm, SiYarn, SiPostman, SiAxios, SiJsonwebtokens } from "react-icons/si";
import { FaCogs } from "react-icons/fa";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },

      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "BootStrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "HeroUI", icon: <FaCogs className="text-pink-500" /> },
      { name: "Shadcn UI", icon: <FaCogs className="text-white" /> },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },

      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "DEVOPS & DEPLOYMENTS",
    skills: [
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "NPM", icon: <SiNpm className="text-red-500" /> },
      { name: "Yarn", icon: <SiYarn className="text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Axios", icon: <SiAxios className="text-purple-400" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-[#0b0f19] min-h-screen py-29 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-purple-400 tracking-widest text-sm font-semibold mb-2">— SKILLS</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Let's Explore My <span className="text-purple-500">Skills</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-gray-700 transition-all">
            <h3 className="text-gray-400 text-xs font-semibold tracking-wider mb-6 uppercase">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="flex items-center gap-2.5 bg-[#1f2937] hover:bg-[#374151] border border-gray-700/60 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer shadow-sm">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
