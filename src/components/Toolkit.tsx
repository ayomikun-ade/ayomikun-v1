"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Zap,
  Box,
} from "lucide-react";

const tools = [
  { name: "Next.js", icon: Globe, desc: "Framework" },
  { name: "React", icon: Code2, desc: "Library" },
  { name: "TypeScript", icon: Terminal, desc: "Language" },
  { name: "Tailwind", icon: Layout, desc: "Styling" },
  { name: "Node.js", icon: Server, desc: "Runtime" },
  { name: "Tanstack Query", icon: Database, desc: "Data Handling" },
  { name: "Framer Motion", icon: Layers, desc: "Animation" },
  { name: "Vite", icon: Zap, desc: "Build Tool" },
  { name: "Zustand", icon: Box, desc: "State" },
  { name: "Shadcn", icon: Smartphone, desc: "Components" },
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
              <tool.icon className="h-8 w-8 text-gray-400 group-hover:text-accent mb-4 transition-colors" />
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
