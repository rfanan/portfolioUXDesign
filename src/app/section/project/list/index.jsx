import React from "react";
import styles from "./style.module.css";

export default function index({ index, title, category, setModal }) {
  return (
    <>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={`${styles.project} cursor-pointer flex flex-wrap justify-between p-10 w-full items-center border-b border-t `}
      >
        <h2 className="text-xl xl:text-7xl">{title}</h2>
        <p>{category}</p>
      </div>
    </>
  );
}
