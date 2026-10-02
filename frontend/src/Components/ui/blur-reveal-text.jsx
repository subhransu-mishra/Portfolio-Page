import { motion } from "motion/react";

export function BlurRevealText({ text, className = "" }) {
  const characters = text.split("");

  return (
    <h1 className={`flex justify-center ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}
