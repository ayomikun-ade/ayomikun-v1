import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { LinkSquare02Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Image from "next/image";
import { allProjects } from "./data";

export function Card({ project }: { project: (typeof allProjects)[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/10 bg-black/50 overflow-hidden rounded-lg hover:border-accent/30 transition-colors h-full flex flex-col"
      onMouseMove={onMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image Container */}
      <div className="relative h-80 max-md:h-52 w-full overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 max-md:opacity-0 bg-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
        <div className="absolute inset-0 max-md:opacity-0 bg-black/20 z-10 group-hover:bg-transparent transition-all duration-500" />

        {/* Scanline Effect */}
        <div className="absolute inset-0 max-md:opacity-0 z-20 opacity-30 group-hover:opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,6px_100%]" />

        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 object-top md:filter md:grayscale md:contrast-125 md:group-hover:grayscale-0 md:group-hover:contrast-100 transition-all duration-500"
          />
        </motion.div>
      </div>

      <div className="p-6 flex flex-col grow relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-mono! text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-400 mb-6 grow leading-relaxed text-sm">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono text-accent border border-accent/20 bg-accent/5 rounded-sm"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <div className="relative group/tooltip inline-block">
              <span className="px-2 py-1 text-xs font-mono text-accent border border-accent/20 bg-accent/5 rounded-sm cursor-help">
                +{project.tags.length - 4}
              </span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="px-2 py-1 bg-black/90 border border-accent/20 text-accent text-xs rounded whitespace-nowrap backdrop-blur-sm shadow-xl">
                  {project.tags.slice(4).join(", ")}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-auto">
          <MagneticButton
            href={project.live}
            external
            className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-sm rounded-sm hover:bg-accent transition-colors"
          >
            <HugeiconsIcon icon={LinkSquare02Icon} size={16} strokeWidth={2} />{" "}
            DEMO
          </MagneticButton>
          <MagneticButton
            href={project.github}
            external
            className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white font-bold text-sm rounded-sm hover:bg-white/10 transition-colors"
          >
            <HugeiconsIcon icon={GithubIcon} size={16} strokeWidth={2} /> REPO
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
