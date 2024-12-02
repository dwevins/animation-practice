"use client";
import { motion } from "motion/react";

export default function Secondary() {
  const variants = {
    visible: (offset: number) => ({
      scale: 1,
      transition: { delay: offset * 0.2 },
    }),
  };
  return (
    <>
      <h1 className="text-6xl">secondary page</h1>

      <motion.p
        className="prose-slate max-w-prose"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        obcaecati voluptas temporibus? Alias dolores placeat non nostrum ullam
        expedita, voluptatem assumenda quasi sequi eius eveniet praesentium
        mollitia quos facere. Quidem!
      </motion.p>
    </>
  );
}
