import React, { useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Nav from "../Header/Nav/index";

export default function Index() {
  const [isActive, SetIsActive] = useState(false);

  return (
    <>
      <div onClick={() => SetIsActive(!isActive)} className="fixed z-50 right-0 m-5 h-20 w-20 rounded-full bg-lime-400 cursor-pointer flex items-center justify-center ">
        <div className={`${styles.burger}  ${isActive ? styles.burgerActive : ""}`}></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
