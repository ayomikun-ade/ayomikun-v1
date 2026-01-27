"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-mono! font-bold text-white mb-4">
            <span className="text-accent">01.</span> ABOUT
          </h2>
          <div className="h-1 w-20 bg-accent/50"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p>
              Hello! I&apos;m Ayomikun, a Frontend Engineer who enjoys bridging
              the gap between engineering and design. I take pride in building
              applications that are not only functional but also user-friendly
              and visually appealing.
            </p>
            <p>
              My journey in web development started with a curiosity for how
              things work on the internet, which quickly turned into a passion
              for creating digital experiences. Today, I leverage modern
              technologies to build high-performance web applications.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source, or refining my craft to
              deliver the best possible user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl relative overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl font-mono! font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                SYSTEM_STATUS
              </h3>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">OPERATOR</span>
                  <span className="text-accent">Ayomikun Adeosun</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">ROLE</span>
                  <span className="text-white">Frontend Engineer</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">FOCUS</span>
                  <span className="text-white">User friendly, Performance</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-gray-500">AVAILABILITY</span>
                  <span className="text-green-400">Open for opportunities</span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/20 group-hover:border-accent transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/20 group-hover:border-accent transition-colors" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
