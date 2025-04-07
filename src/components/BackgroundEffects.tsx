import React from "react";
import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  gradientColors?: string[];
  animationDuration?: number;
}

const BackgroundEffects = ({
  gradientColors = ["#FF8A65", "#FF5722", "#F4511E"],
  animationDuration = 20,
}: BackgroundEffectsProps) => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-950 overflow-hidden -z-10">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -inset-[100px] opacity-30 dark:opacity-40"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 360],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {gradientColors.map((color, index) => (
          <motion.div
            key={color}
            className="absolute rounded-full blur-3xl"
            style={{
              background: color,
              width: "50%",
              height: "50%",
              left: `${index * 30 + 25}%`,
              top: `${index * 20 + 25}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: animationDuration - index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Blockchain-themed grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundEffects;
