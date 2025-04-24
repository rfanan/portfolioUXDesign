import React, { useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Nav from "../Header/Nav/index";
import Button from "../button";
import Magnetic from "../animate/magnetic";

export default function Index() {
  const [isActive, SetIsActive] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 m-5 z-50">
        <Magnetic>
          <Button
            onClick={() => SetIsActive(!isActive)}
            className={` ${isActive ? "bg-lime-400" : "bg-PrimaryBlack"} border border-[#F2F7F2]/10 relative h-16 w-16  md:h-20 md:w-20 cursor-pointer flex items-center justify-center`}
          >
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </Button>
        </Magnetic>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
