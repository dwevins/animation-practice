/**
 * adapted from
 * https://prateekshawebdesign.com/blog/step-by-step-guide-to-adding-page-transitions-and-animations-in-nextjs-14
 */

"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface props {
  children: ReactNode;
}

export default function Transition({ children }: props) {
  return (
    <motion.div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
