import React from "react";
import { motion } from "framer-motion";
import {slide, scale } from "../anim";

export default function Index({ data, isActive }) {
  const { title, index, href } = data;

  return (
    <>
      <motion.div variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "close"}>
          <div className="text-white">{title}</div>
        </motion.div>
      </motion.div>
    </>
  );
}
