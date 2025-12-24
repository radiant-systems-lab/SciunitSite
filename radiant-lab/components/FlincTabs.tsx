// components/FlincTabs.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Cpu,
  Shuffle,
  Cloud,
  Terminal,
  Box,
  FileCode2,
  Wrench,
  BarChart3,
    Database,
    Play,
    Scissors,
    ArrowRight,
    Rocket,
} from "lucide-react";
import { Button } from "./ui/button";

const tabData = [
  {
    id: "background",
    title: "Background & Pain Points",
    content: (
      <div className="space-y-3 text-black/80">
        <h3 className="text-lg font-semibold">Why notebooks need provenance</h3>
        <p className="text-black/70 text-sm">Re-execution without re-install parties</p>
        <ul className="list-disc pl-5 text-sm leading-relaxed">
          <li>Hidden state and manual installs make notebooks hard to reproduce.</li>
          <li>Environments drift — dependencies change or disappear over time.</li>
          <li>Execution order is often lost, breaking reproducibility.</li>
          <li>Shared notebooks omit binaries, library versions, and system context.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "what",
    title: "What is FLINC?",
    content: (
      <>
        <h3 className="text-lg font-semibold text-black/90 mb-1">Notebook reproducibility through Sciunit integration</h3>
        <p className="text-black/70 text-sm mb-4">Capture while you develop; repeat reliably later.</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Audit Kernel</h4>
            </div>
            <p className="text-sm text-black/70">
              captures code, libraries, binaries, and runtime environment via Sciunit&apos;s system-call tracing.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Cpu className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Repeat Kernel</h4>
            </div>
            <p className="text-sm text-black/70">
              re-executes captured notebooks deterministically on any compatible machine — no manual re-installs; stable, portable reruns.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <FileCode2 className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Linked Provenance Store</h4>
            </div>
            <p className="text-sm text-black/70">
              Maintains a lightweight record of executions that can be queried or exported to trace how results were derived and compare runs over time.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
  id: "how",
  title: "How it Works",
  content: (
    <>
      <h3 className="text-lg font-semibold text-black/90 mb-1">
        How FLINC captures and replays notebooks
      </h3>
      <p className="text-black/70 text-sm mb-4">
        FLINC connects notebook with Sciunit’s runtime capture system. 
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Box className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">Audit Execution</h4>
          </div>
          <p className="text-sm text-black/70">
            Start your notebook using the <strong>Audit kernel</strong>. Every command you run is traced,
            capturing binaries, libraries, datasets, and environment variables on the fly.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Database className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">Provenance Capture</h4>
          </div>
          <p className="text-sm text-black/70">
            FLINC builds a <strong>process-to-file graph</strong> summarizing how code cells use data and
            dependencies, enabling partial or modified replays later.
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Cloud className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">Repeat Anywhere</h4>
          </div>
          <p className="text-sm text-black/70">
            Switch to the <strong>Repeat kernel</strong> to re-execute your notebook from the captured runtime,
            locally or on a compatible remote machine—no re-installs needed.
          </p>
        </div>
      </div>
    </>
  ),
},

  {
  id: "modes",
  title: "Modes & Scenarios",
  content: (
    <>
      <h3 className="text-lg font-semibold text-black/90 mb-1">
        Three reproducibility modes in action
      </h3>
      <p className="text-black/70 text-sm mb-4">
        FLINC supports flexible re-execution: from identical reruns to selective cell execution
        and comparative exploration — all powered by captured provenance.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Mode 1: Audit → Repeat (Exact) */}
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Play className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">
              Audit → Repeat (Exact)
            </h4>
          </div>
          <ul className="list-disc pl-5 text-sm text-black/70 leading-snug">
            <li>Re-execute the captured notebook exactly as it ran originally.</li>
            <li>Ideal for reviews, verifications, and teaching reproducibility.</li>
          </ul>
        </div>

        {/* Mode 2: Partial Cell Reruns */}
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Scissors className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">
              Partial Cell Reruns
            </h4>
          </div>
          <p className="text-sm text-black/70">
            Re-run only selected notebook cells. FLINC automatically includes
            the necessary upstream dependencies to maintain consistency.
          </p>
        </div>

        {/* Mode 3: Modify & Compare */}
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-2 mb-1">
            <Wrench className="h-5 w-5 text-black/70" />
            <h4 className="font-semibold text-black/80">
              Modify & Compare
            </h4>
          </div>
          <p className="text-sm text-black/70">
            Edit code or data, rerun under the same captured runtime, and
            compare outputs across runs. Each version remains deduplicated and
            shareable.
          </p>
        </div>
      </div>
    </>
  ),
},
  /*{
    id: "troubleshoot",
    title: "Troubleshooting",
    content: (
      <>
        <h3 className="text-lg font-semibold text-black/90 mb-1">Quick fixes</h3>
        <p className="text-black/70 text-sm mb-4">Common hiccups & what to check first.</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <Cpu className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">ImportError in Repeat</h4>
            </div>
            <p className="text-sm text-black/70">
              Ensure the package was executed in Audit so it was captured; re-run the cell in Audit.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Large Object Size</h4>
            </div>
            <p className="text-sm text-black/70">
              Snapshot datasets selectively; exclude transient outputs from capture.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="h-5 w-5 text-black/70" />
              <h4 className="font-semibold text-black/80">Path Issues</h4>
            </div>
            <p className="text-sm text-black/70">
              Prefer project-relative paths; avoid machine-specific mounts.
            </p>
          </div>
        </div>
      </>
    ),
  },*/

  {
  id: "example",
  title: "Hello, FLINC Example",
  content: (
    <>
      <h3 className="text-lg font-semibold text-black/90 mb-1">
        “Hello, FLINC” — minimal notebook capture
      </h3>
      <p className="text-black/70 text-sm mb-4">
        Capture and replay a simple notebook using FLINC’s <strong>Audit</strong> and <strong>Repeat</strong> kernels.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* === Left: Example Notebook === */}
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <h4 className="font-mono text-sm mb-1">notebook.ipynb</h4>
          <p className="text-xs text-black/60 mb-2">Minimal 2-cell example</p>
          <pre className="bg-gray-100 rounded-lg p-3 text-sm overflow-x-auto">
{`# Cell 1
import numpy as np

# Cell 2
arr = np.arange(5)
arr.mean()`}
          </pre>
        </div>

        {/* === Right: FLINC Commands === */}
        <div className="space-y-2 text-sm text-black/80">
          <p>
            <strong>Step 1:</strong> Run the notebook using the <strong>Audit kernel</strong>:
          </p>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
{`# From Jupyter
Kernel → Change Kernel → flinc_audit
Run All Cells`}
          </pre>

          <p>
            <strong>Step 2:</strong> Re-run it using the <strong>Repeat kernel</strong>:
          </p>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
{`# From Jupyter
Kernel → Change Kernel → flinc_repeat
Run All Cells`}
          </pre>

          <p className="text-xs text-black/60">
            Tip: Both runs yield the same output, but the Repeat kernel ensures all dependencies
            and binaries come from the captured runtime — no reinstallation required.
          </p>
        </div>
      </div>

      {/* === Summary Boxes === */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-black/10 bg-white p-3">
          <div className="flex items-center gap-2">
            <Box className="h-4 w-4 text-black/70" />
            <p className="text-sm font-semibold text-black/80">Notebook + Env</p>
          </div>
          <p className="text-xs text-black/60">Captured</p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-3">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-black/70" />
            <p className="text-sm font-semibold text-black/80">Runtime Provenance</p>
          </div>
          <p className="text-xs text-black/60">Tracked per cell</p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-3">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4 text-black/70" />
            <p className="text-sm font-semibold text-black/80">Repeat Exactly</p>
          </div>
          <p className="text-xs text-black/60">Local or remote</p>
        </div>
      </div>
    </>
  ),
},

];

export default function FlincTabs() {
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section
      id="flinc-tabs"
      className="w-full max-w-6xl mx-auto bg-white rounded-2xl p-6 mt-8 ring-1 ring-black/10"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap justify-center bg-white ring-1 ring-black/10 rounded-xl p-1 w-full">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                "data-[state=active]:bg-[#F1B82D] data-[state=active]:text-black"
              )}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-white ring-1 ring-black/10 px-6 pt-5 pb-4"
            >
              {tabData.find((t) => t.id === activeTab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs> 
    </section>
  );
}
