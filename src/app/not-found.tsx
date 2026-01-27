import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingDock } from "@/components/FloatingDock";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-background text-foreground p-4">
      <div className="shrink-0">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-mono font-bold text-lg tracking-tighter">
            {"<ayomikun/>"}
          </span>
        </Link>
      </div>
      {/* Background Grid - kept for consistency but subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[100px_100px]"></div>

      <div className="relative z-10 text-center">
        {/* Minimal 404 */}
        <h1 className="text-9xl md:text-[12rem] font-bold font-mono text-white/5 select-none leading-none tracking-tighter">
          404
        </h1>

        <div className="space-y-6 -mt-8 md:-mt-12 relative">
          <p className="text-xl md:text-2xl font-mono text-accent tracking-widest uppercase">
            Signal Lost
          </p>

          <p className="text-gray-500 font-mono text-sm max-w-md mx-auto">
            The requested coordinates do not exist in this sector.
          </p>

          <div className="pt-8">
            <MagneticButton
              href="/"
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-mono hover:bg-white hover:text-black transition-all rounded-full flex items-center gap-2 mx-auto"
            >
              <Home className="w-4 h-4" />
              <span>RETURN_BASE</span>
            </MagneticButton>
          </div>
        </div>
      </div>

      <FloatingDock alwaysVisible />
    </div>
  );
}
