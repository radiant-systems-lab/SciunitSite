"use client";

import { Card } from "@/components/ui/card";
import { Box, Terminal, Github } from "lucide-react";

interface TrackSelectorProps {
  active: "flinc" | "sciunit";
  setActive: (value: "flinc" | "sciunit") => void;
}

export default function TrackSelector({ active, setActive }: TrackSelectorProps) {
  return (
    <section className="mt-6 w-full flex justify-center">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2">

        {/* === Sciunit CLI Tile === */}
        <Card
          role="button"
          tabIndex={0}
          onClick={() => setActive("sciunit")}
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 p-5 sm:p-6 cursor-pointer ${
            active === "sciunit"
              ? "border-[#F1B82D] shadow-sm"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <div className="flex items-start gap-3">
            <Box className="h-5 w-5 mt-1 text-black/80" />

            <div className="leading-tight">
              <h3
                className={`text-lg font-semibold ${
                  active === "sciunit" ? "text-[#F1B82D]" : "text-black"
                }`}
              >
                Command Line Interface (CLI)
              </h3>

              <p className="text-sm text-black/60 mt-0.5">
                Lightweight Runnable Packages
              </p>

              {/* GitHub Link */}
              <a
                href="https://github.com/radiant-systems-lab/sciunit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-2 inline-flex items-center gap-1 text-xs text-black/60 hover:text-black transition"
              >
                <Github className="h-4 w-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </Card>

        {/* === Notebook Kernels Tile === */}
        <Card
          role="button"
          tabIndex={0}
          onClick={() => setActive("flinc")}
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 p-5 sm:p-6 cursor-pointer ${
            active === "flinc"
              ? "border-[#F1B82D] shadow-sm"
              : "border-black/10 hover:border-black/30"
          }`}
        >
          <div className="flex items-start gap-3">
            <Terminal className="h-5 w-5 mt-1 text-black/80" />

            <div className="leading-tight">
              <h3
                className={`text-lg font-semibold ${
                  active === "flinc" ? "text-[#F1B82D]" : "text-black"
                }`}
              >
                Notebook Kernels
              </h3>

              <p className="text-sm text-black/60 mt-0.5">
                Capture Notebook Environment and Reuse
              </p>

              {/* GitHub Link */}
              <a
                href="https://github.com/radiant-systems-lab/flinc"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-2 inline-flex items-center gap-1 text-xs text-black/60 hover:text-black transition"
              >
                <Github className="h-4 w-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
