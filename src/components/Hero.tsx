"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[100px_100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs md:text-sm font-mono! tracking-widest text-accent border border-accent/20 bg-accent/5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AVAILABLE
          </h2>

          <div className="text-5xl md:text-8xl font-black tracking-tighter mb-6 font-mono! text-white min-h-[1.2em]">
            <Typewriter
              options={{
                strings: [
                  "I'M AYOMIKUN",
                  "A FRONTEND ENGINEER",
                  "A FULLSTACK DEV",
                  "BUILDING THE FUTURE",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                cursor: "|",
                wrapperClassName: "text-white",
                cursorClassName: "text-accent animate-pulse",
              }}
            />
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Frontend Engineer specializing in crafting high-performance,
            visually immersive digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-mono font-bold hover:bg-accent hover:text-black transition-all transform hover:scale-105"
            >
              VIEW_PROJECTS
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-700 text-gray-300 font-mono hover:border-accent hover:text-accent transition-all"
            >
              CONTACT_ME
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}
