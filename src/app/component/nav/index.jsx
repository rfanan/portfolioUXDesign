import React, { useState } from "react";
import styles from "./style.module.scss";

export default function Index() {
  const [isActive, SetIsActive] = useState(false);

  return (
    <>
      <div onClick={() => SetIsActive(!isActive)} className="fixed  z-20 right-0 m-5 h-20 w-20 rounded-full bg-lime-400 cursor-pointer flex items-center justify-center ">
        <div className={`${styles.burger}  ${isActive ? styles.burgerActive : ""}`}>
          
        </div>
      </div>
    </>
  );
}
