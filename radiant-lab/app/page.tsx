"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackSelector from "@/components/TrackSelector";
import SciunitTabs from "@/components/SciunitTabs";
import FlincHero from "@/components/FlincHero";
import FlincTabs from "@/components/FlincTabs";
import SciunitHero from "@/components/SciunitHero";
import TryItNowButton from "@/components/TryItNow";

export default function Home() {
  // 🔸 lifted up state
  const [activeTrack, setActiveTrack] = useState<"flinc" | "sciunit">("sciunit");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main role="main" className="flex-grow">
        {/* Track selector now receives props */}
        <TrackSelector active={activeTrack} setActive={setActiveTrack} />

        {/* Conditional rendering for each track */}
        {activeTrack === "sciunit" ? (
          <>
            <SciunitHero />
            <SciunitTabs />
            <TryItNowButton label="Try SciunitCLI Now"
            href="https://trovi.chameleoncloud.org/dashboard/artifacts/60bfeea7-d35d-42c1-ae3b-c8b94fae99a9" />
          </>
        ) : (
          <>
            <FlincHero />
            <FlincTabs />
            <TryItNowButton label="Try FLINC Now"
            href="https://trovi.chameleoncloud.org/dashboard/artifacts/24618f97-95cc-4bbd-b79a-26adbfdc8cb7" />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
