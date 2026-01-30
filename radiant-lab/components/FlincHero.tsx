


"use client";

import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const GOLD = "#F1B82D"; // Mizzou gold

export default function FlincHero() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 px-0 sm:px-2 lg:px-3">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid items-start gap-10 md:grid-cols-[1.4fr_1.4fr]"
      >
        {/* ---- LEFT CONTENT ---- */}
        <div>
          <Badge
            className="text-black font-medium text-sm ring-1"
            style={{
              backgroundColor: GOLD,
              borderColor: "rgba(0,0,0,0.1)",
            }}
          >
            Sciunit - NB Kernels - Capture Notebook Environment
          </Badge>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Reproducible notebooks <br /> with{" "}
            <span style={{ color: GOLD }}>Sciunit NB Kernels</span>
          </h2>

          <p className="mt-4 max-w-xl text-black/70">
            Sciunit NB Kernels extend reproducibility engine to interactive
            notebooks such as Jupyter. Through <strong>Audit</strong> and{" "}
            <strong>Repeat</strong> kernels, it captures and replays complete
            computational contexts — code, data, and binaries — ensuring{" "}
            <strong>re-executable</strong>, <strong>shareable</strong>, and{" "}
            <strong> provenance-rich</strong> workflows beyond a single platform
          </p>
        </div>

        {/* ---- RIGHT CONTENT ---- */}
        <div className="flex flex-col items-end gap-3">
          {/* Quickstart Button */}
          <Button
            asChild
            className="gap-2 px-4 py-2 text-sm font-medium bg-[#F1B82D] text-black hover:bg-[#f5c643] rounded-md shadow-none"
          >
            <a
              href="https://trovi.chameleoncloud.org/dashboard/artifacts/24618f97-95cc-4bbd-b79a-26adbfdc8cb7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket className="h-4 w-4" />
              <span>Quickstart</span>
            </a>
          </Button>

          {/* ---- Image placeholder (CLI-matched dimensions) ---- */}
          <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-black/5">
            <img
              src="/SciunitSite/SciunitNB_Video_Image.png"
              alt="Sciunit NB Kernels – Video Coming Soon"
              className="w-full h-[270px] sm:h-[300px] md:h-[340px] lg:h-[380px] object-cover"
            />
          </div>

          {/* Subtext */}
          <p className="text-xs text-black/60">
            Watch the player for a quick understanding of Sciunit NB Kernels.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
