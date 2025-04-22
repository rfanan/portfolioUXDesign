import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide, slide, scale } from "../anim";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/Work",
  },
  {
    title: "Contact",
    href: "/Contact",
  },
];

export default function index() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="min-h-screen z-20 bg-PrimaryBlack fixed right-0 top-0 text-white">
        <div className="box-border h-full p-32  flex flex-col justify-between">
          <div className="flex flex-col text-lg gap-3 mt-20">
            <div className="text-gray-500 border-b border-gray-500 uppercase text-lg mb-10">Navigation</div>
            {navItems.map((data, index) => {
              return (
                <motion.div key={index} variants={slide} initial="initial" animate="enter" exit="exit">
                  <motion.div variants={scale} animate={isActive ? "open" : "closed"}>
                    <div key={index} data={{ ...data, index }}>
                      {data.title}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
