import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import Nav from "../Header/Nav/index";
import Button from "../button";
import Magnetic from "../animate/magnetic";

const scaleAnimate = {
  initial: { scale: 0 },
  enter: { scale: 1, transition: { duration: 0.4, ease: [0.66, 0.05, 0.36, 1] } },
  closed: { scale: 0, transition: { duration: 0.4, ease: [0.45, 0.05, 0.55, 0.95] } },
};

const slideUp = {
  initial: { y: 0, opacity: 1 },
  enter: { y: -40, opacity: 0, transition: { duration: 0.2, cubicBezier: [0, 0, 0.58, 1] } },
  closed: { y: 0, opacity: 1, transition: { duration: 0.8, cubicBezier: [0, 0, 0.58, 1] } },
};

export default function Index() {
  const [isActive, SetIsActive] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    const scroll = () => {
      const y = window.scrollY;
      setIsButton(y > 400);

      const isScrollDown = y > prevScroll.current;

      if (isScrollDown) {
        setIsNav(y > 0);
      } else {
        setIsNav(y > 200);
      }

      prevScroll.current = y;
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      <motion.div variants={slideUp} initial="initial" animate={isNav ? "enter" : "closed"} className={`hidden md:block fixed top-0 left-0 w-screen z-50`}>
        <div className="font-semibold w-full relative flex justify-between  md:py-3 md:px-24 xl:py-8 xl:px-44 cursor-pointer ">
          <div className="hover:text-lime-400">Rofi'anan</div>
          <div className="flex gap-x-10 md:text-sm xl:text-base">
            <Magnetic>
              <div className="hover:text-lime-400">Home</div>
            </Magnetic>
            <Magnetic>
              <div className="hover:text-lime-400">About</div>
            </Magnetic>
            <Magnetic>
              <div className="hover:text-lime-400">Work</div>
            </Magnetic>
            <Magnetic>
              <div className="hover:text-lime-400">Contact</div>
            </Magnetic>
          </div>
        </div>
      </motion.div>
      <motion.div variants={scaleAnimate} initial="initial" animate={isButton ? "enter" : "closed"} className="fixed top-0 right-0 m-5 z-50">
        <Magnetic>
          <Button
            onClick={() => SetIsActive(!isActive)}
            className={`${isActive ? "bg-lime-400" : "bg-PrimaryBlack"} border border-[#F2F7F2]/10 relative h-16 w-16  md:h-20 md:w-20 cursor-pointer flex items-center justify-center`}
          >
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </Button>
        </Magnetic>
      </motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
