import { motion, type Variants } from "framer-motion";

interface TypingEffectProps {
  text: string;
  className?: string;
  delay?: number; // stagger delay per character
}

export default function TypingEffect({ text, className = "", delay }: TypingEffectProps) {
  // Split text into words
  const words = text.split(" ");

  // container variants
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }, // stagger between words
    },
  };

  // per-word variants (stagger children letters)
  const wordContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: delay },
    },
  };

  // per-character animation
  const charVariants: Variants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.p className={`block break-words max-w-full ${className}`} variants={container} initial="hidden" animate="visible">
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block mr-2" variants={wordContainer}>
          {Array.from(word).map((char, idx) => (
            <motion.span key={idx} variants={charVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.p>
  );
}
