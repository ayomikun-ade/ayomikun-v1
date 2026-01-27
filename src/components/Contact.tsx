"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  // Linkedin,
  Twitter,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const socialLinks = [
  { name: "GITHUB", icon: Github, href: "https://github.com/ayomikun-ade" },
  // {
  //   name: "LINKEDIN",
  //   icon: Linkedin,
  //   href: "https://linkedin.com/ayomikun-adeosun",
  // },
  {
    name: "TWITTER",
    icon: Twitter,
    href: "https://twitter.com/theayomikun-ade",
  },
  {
    name: "RESUME",
    icon: FileText,
    href: "/resume.pdf",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ayoadeosun10@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

      {/* Background decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-accent/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center items-end"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-mono! font-bold text-white mb-4">
              <span className="text-accent">04.</span> CONTACT
            </h2>
            <div className="h-1 w-20 bg-accent/50"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in exploring new opportunities,
            collaborating, or exchanging ideas with like-minded individuals.
            Feel free to book a call or email me if you&apos;d like to see my
            portfolio deck or to discuss a potential project.
          </p>
        </motion.div>

        {/* Main Interaction Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-2 border border-white/10 bg-black/50 backdrop-blur-sm rounded-xl">
            <div className="px-6 py-3 bg-white/5 rounded-lg border border-white/5">
              <span className="font-mono text-xl text-accent tracking-wide">
                {email}
              </span>
            </div>

            <div className="flex gap-2 w-full md:w-auto max-md:justify-center">
              <MagneticButton
                onClick={handleCopy}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-card-bg border border-white/20 text-white font-bold font-mono hover:bg-white/10 transition-colors rounded-lg"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "COPIED" : "COPY"}
              </MagneticButton>

              <MagneticButton
                href={`mailto:${email}`}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-bold font-mono hover:bg-accent transition-colors rounded-lg"
              >
                <Mail className="h-4 w-4" />
                SEND_MAIL
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Social Uplinks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 border border-white/10 bg-black/40 hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <link.icon className="h-5 w-5 text-gray-400 group-hover:text-accent transition-colors" />
              <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                {link.name}
              </span>
              <ArrowUpRight className="h-3 w-3 text-gray-500 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
