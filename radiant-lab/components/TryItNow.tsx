"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

interface TryItNowButtonProps {
  label?: string; // e.g. "Try Sciunit Now" or "Try FLINC Now"
  icon?: React.ReactNode; // custom icon if needed
  onClick?: () => void; // optional action for later
   href?: string; // optional link for later
}

export default function TryItNowButton({
  label = "Try It Now",
  icon = <Rocket className="h-4 w-4" />,
  onClick,
  href,
}: TryItNowButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex justify-end max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8"
    >
      <Button
        asChild={!!href}
        onClick={onClick}
        className="gap-2 px-4 py-2 text-sm font-medium bg-[#F1B82D] text-black hover:bg-[#f5c643] rounded-md shadow-none"
      >
       {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
            <span>{label}</span>
          </a>
        ) : (
          <>
            {icon}
            <span>{label}</span>
          </>
        )}
      </Button>
    </motion.div>
  );
}
