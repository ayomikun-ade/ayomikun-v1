"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allProjects } from "./data";
import { Card } from "./project-card";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
              <span className="text-accent">03.</span> PROJECTS
            </h2>
            <div className="h-1 w-20 bg-accent/50"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {allProjects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card project={project} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-mono hover:bg-white hover:text-black transition-all"
          >
            SEE_ALL_PROJECTS
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
