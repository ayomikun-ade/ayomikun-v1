"use client";

import { motion } from "framer-motion";
import zustandLogo from "@/assets/icons/zustand-plain.svg";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiReactquery,
  SiFramer,
  SiVite,
  SiShadcnui,
  SiGit,
  SiExpress,
} from "@icons-pack/react-simple-icons";

const ZustandIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <div
    role="img"
    aria-label="Zustand"
    className={`${className}`}
    style={{
      width: size,
      height: size,
      maskImage: `url(${zustandLogo.src})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskImage: `url(${zustandLogo.src})`,
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      backgroundColor: "currentColor",
    }}
  />
);

const tools = [
  { name: "Next.js", icon: SiNextdotjs, desc: "Framework" },
  { name: "React", icon: SiReact, desc: "Library" },
  { name: "TypeScript", icon: SiTypescript, desc: "Language" },
  { name: "Tailwind", icon: SiTailwindcss, desc: "Styling" },
  { name: "Node.js", icon: SiNodedotjs, desc: "Runtime" },
  { name: "Express JS", icon: SiExpress, desc: "Framework" },
  { name: "FastAPI", icon: SiFastapi, desc: "Framework" },
  { name: "Tanstack Query", icon: SiReactquery, desc: "Data Handling" },
  { name: "Framer Motion", icon: SiFramer, desc: "Animation" },
  { name: "Vite", icon: SiVite, desc: "Build Tool" },
  { name: "Zustand", icon: ZustandIcon, desc: "State" },
  { name: "Shadcn", icon: SiShadcnui, desc: "Components" },
  { name: "Git & GitHub", icon: SiGit, desc: "Version Control" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Toolkit() {
  return (
    <section
      id="toolkit"
      className="py-24 bg-card-bg/30 border-t border-b border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-mono! font-bold text-white mb-4">
            <span className="text-accent">02.</span> TOOLKIT
          </h2>
          <div className="h-1 w-20 bg-accent/50"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={item}
              className="group relative p-6 border border-white/10 bg-black/40 hover:border-accent/50 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <tool.icon
                size={32}
                className="text-gray-400 group-hover:text-accent mb-4 transition-colors"
              />
              <h3 className="text-lg font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-500 font-mono">{tool.desc}</p>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-accent transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-accent transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
