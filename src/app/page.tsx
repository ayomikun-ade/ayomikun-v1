"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Toolkit } from "@/components/Toolkit";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FloatingDock } from "@/components/FloatingDock";
import { Preloader } from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen relative selection:bg-accent selection:text-black">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="crt-overlay" />
          <Hero />
          <About />
          <Toolkit />
          <Projects />
          <Contact />
          <FloatingDock />
        </>
      )}
    </main>
  );
}
