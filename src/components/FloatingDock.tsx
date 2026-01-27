"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const dockItems = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ayomikun-ade",
    external: true,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/ayomikun-adeosun",
    external: true,
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/theayomikun-ade",
    external: true,
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ayoadeosun10@gmail.com",
    external: true,
  },
  {
    name: "Resume",
    icon: FileText,
    href: "/resume.pdf",
    external: true,
    highlight: true,
  },
];

export function FloatingDock({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [isVisible, setIsVisible] = useState(alwaysVisible);

  useEffect(() => {
    if (alwaysVisible) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5; // Show after scrolling 50% of viewport
      const contactSection = document.getElementById("contact");

      let isOverContact = false;
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Check if contact section is significantly visible in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isOverContact = true;
        }
      }

      // Visible if past hero AND not over contact section
      if (window.scrollY > heroHeight && !isOverContact) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-8 left-1/2 z-40"
        >
          <div className="flex items-center gap-2 p-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl shadow-accent/5">
            {dockItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative group p-3 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1",
                  item.highlight
                    ? "bg-white text-black hover:bg-accent hover:text-black"
                    : "text-gray-400 hover:text-white hover:bg-white/10",
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 group-hover:text-accent transition-colors",
                    item.highlight && " group-hover:text-black",
                  )}
                />

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/20 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>

                {/* Active Indicator for highlight button */}
                {item.highlight && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
