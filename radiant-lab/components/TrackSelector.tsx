"use client";

import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TrackSelector() {
  const router = useRouter();
  const [active, setActive] = useState<"sciunit" | "flinc">("sciunit"); // default active = sciunit

  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-12 px-4">
      {/* Sciunit Card */}
        <Card
            role="button"
            tabIndex={0}
            onClick={() => {
               setActive("sciunit");
               document.getElementById("sciunit")?.scrollIntoView({ behavior: "smooth" });
             }}
            onKeyDown={(e) => e.key === "Enter" && setActive("sciunit")}
            className={`p-6 w-full transition cursor-pointer focus:outline-none focus:ring-4 focus:ring-mizzouGold
            ${active === "sciunit"
                 ? "border-4 border-mizzouGold shadow-lg"
                 : "border border-gray-300 hover:shadow-md"}`}
>
            <h3 className={`text-xl font-bold ${active === "sciunit" ? "text-mizzouGold" : "text-black"}`}>
                Sciunit
             </h3>
            <p className="text-gray-600 mt-2">
                 Learn reproducible research objects with hands-on examples.
             </p>
       </Card>


      {/* FLINC Card */}
      <Card
        role="button"
        tabIndex={0}
        onClick={() => {
          setActive("flinc");
          router.push("/flinc");
        }}
        onKeyDown={(e) => e.key === "Enter" && setActive("flinc")}
        className={`p-6 transition cursor-pointer focus:outline-none focus:ring-4
          ${
            active === "flinc"
              ? "border-4 border-primary shadow-lg"
              : "border border-border opacity-90 hover:shadow-lg"
          }`}
      >
        <h3
          className={`text-xl font-bold ${
            active === "flinc" ? "text-primary" : "text-foreground"
          }`}
        >
          FLINC
        </h3>
        <p className="text-muted-foreground mt-2">
          Notebook-first reproducibility (Coming soon).
        </p>
      </Card>
    </div>
  );
}
