import { useState } from "react";
import { motion } from "framer-motion";

export default function HoverText() {
  const [isHovered, setIsHovered] = useState(false);

  const textVariantsTop = {
    initial: { y: 0 },
    hover: {
      y: "-100%",
      transition: { duration: 0.3, ease: [0.7, 0, 0.3, 1] },
    },
    exit: { y: "0%", transition: { duration: 0.3, ease: [0.7, 0, 0.3, 1] } },
  };

  const textVariantsBottom = {
    initial: { y: "100%" },
    hover: { y: "0%", transition: { duration: 0.3, ease: [0.7, 0, 0.3, 1] } },
    exit: { y: "100%", transition: { duration: 0.3, ease: [0.7, 0, 0.3, 1] } },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative h-20 w-48 overflow-hidden cursor-pointer border-2 border-blue-500 rounded-full flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full w-full overflow-hidden">
          <motion.span
            variants={textVariantsTop}
            initial="initial"
            animate={isHovered ? "hover" : "exit"}
            className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-500"
          >
            Code by rofi
          </motion.span>
          <motion.span
            variants={textVariantsBottom}
            initial="initial"
            animate={isHovered ? "hover" : "exit"}
            className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-500 drop-shadow-lg"
          >
            anan
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
