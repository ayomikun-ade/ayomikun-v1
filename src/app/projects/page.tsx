"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allProjects } from "@/components/data";
import { Card } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors font-mono mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> BACK_TO_BASE
          </Link>
          <h1 className="text-4xl md:text-6xl font-black font-mono text-white mb-4">
            ALL_PROJECTS
            <span className="text-accent">.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A complete archive of experiments, applications, and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, i) => (
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
      </div>
    </main>
  );
}
