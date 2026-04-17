"use client";

import { motion } from "framer-motion";

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-2 border-white/20 border-t-white/20 rounded-full"
        style={{
          borderTop: "2px solid transparent",
          borderRight: "2px solid transparent",
          borderBottom: "2px solid transparent",
          borderLeft: "2px solid transparent",
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </div>
  );
};
