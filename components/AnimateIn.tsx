"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimateIn({ 
  children, 
  delay = 0,
  direction = "up"
}: { 
  children: ReactNode, 
  delay?: number,
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initialPosition = directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPosition }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay }}
    >
      {children}
    </motion.div>
  );
}
