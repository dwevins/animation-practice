/**
 * adapted from
 * https://prateekshawebdesign.com/blog/step-by-step-guide-to-adding-page-transitions-and-animations-in-nextjs-14
 */

import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import Transition from "./transition";

interface props {
  children: ReactNode;
}

export default function Template({ children }: props) {
  return (
    <AnimatePresence>
      <Transition>{children}</Transition>
    </AnimatePresence>
  );
}
