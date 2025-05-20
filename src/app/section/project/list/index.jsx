import React from "react";
import styles from "./style.module.css";
import Swal from "sweetalert2";

export default function index({ index, title, category, url, setModal }) {
  const handleClikUrl = () => {
    if (!url) {
      Swal.fire({
        title: "Oops, it's gone 😢",
        text: "The link to this project isn't available anymore. It might’ve been deleted or just not published yet ",
        icon: "warning",
        confirmButtonText: "Alright then",
        confirmButtonColor: "#328E6E",
      });
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <>
      <div onClick={handleClikUrl}>
        <div
          onMouseEnter={() => {
            setModal({ active: true, index });
          }}
          onMouseLeave={() => {
            setModal({ active: false, index });
          }}
          className={`${styles.project} cursor-pointer flex flex-wrap justify-between p-10 md:p-10 xl:p-14 w-full items-center border-b border-t `}
        >
          <h2 className="font-semibold text-2xl md:text-5xl xl:text-7xl">{title}</h2>
          <p>{category}</p>
        </div>
      </div>
    </>
  );
}
