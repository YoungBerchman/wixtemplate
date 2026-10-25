import { useReducedMotion, motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex w-full justify-center"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
