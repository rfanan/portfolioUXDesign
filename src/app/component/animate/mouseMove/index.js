import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
const CustomCursor = ({ active, children }) => {
  const cursor = useRef(null);

  useEffect(() => {
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.2,
      ease: "power3",
    });

    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.1,
      ease: "power3",
    });

    const move = (e) => {
      const { clientX, clientY } = e;
      xMoveCursor(clientX);
      yMoveCursor(clientY);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursor}
        className="absolute top-0 left-0 w-10 h-10 bg-black rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        halo
      </motion.div>
      {children}
    </>
  );
};

export default CustomCursor;
