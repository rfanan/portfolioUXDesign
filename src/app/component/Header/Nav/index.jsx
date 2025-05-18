import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Links from "../Link/index";
import Curve from "../Curve";

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
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="min-h-screen w-full z-20 bg-PrimaryBlack fixed left-0 top-0 text-white">
        <div className="box-border h-full p-32  flex flex-col justify-between">
          <div className="flex flex-col text-lg gap-3 mt-20">
            <div className="text-gray-500 border-b border-gray-500 uppercase text-lg mb-10">Navigation</div>
            {navItems.map((data, index) => {
              return <Links key={index} data={{ ...data, index }} isActive={isActive}></Links>;
            })}
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}
