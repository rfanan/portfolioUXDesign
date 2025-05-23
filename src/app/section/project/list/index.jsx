import React from "react";
import styles from "./style.module.css";
import Swal from "sweetalert2";
import Image from "next/image";

export default function index({ index, src, title, category, url, setModal }) {
  const handleClikUrl = () => {
    if (!url) {
      Swal.fire({
        title: "Oops 😢",
        text: "The link to this project isn't available anymore. It might’ve been deleted ",
        icon: "warning",

        confirmButtonText: "Okay",
        confirmButtonColor: "#328E6E",
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://gist.githubusercontent.com/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif")
              left top  / 250px 150px
              no-repeat
              `,
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
          className={`${styles.project} border-b-2 ${index === 0 ? "border-t-2" : ""} cursor-pointer flex flex-wrap justify-between py-5 md:p-8 lg:p-14 xl:p-16 w-full items-center `}
        >
          <div className="lg:hidden py-4 w-full flex justify-center">
            <Image src={`/image/${src}`} width={540} height={430} alt="image" />
          </div>
          <h2 className="font-medium text-2xl md:text-4xl lg:text-6xl xl:text-8xl pl-6 md:pl-2 lg:pl-4 xl:pl-5">{title}</h2>
          <p className="text-xs md:text-sm lg:text-sm xl:text-lg pr-6 md:pr-10 lg:pr-4 xl:pr-5">{category}</p>
        </div>
      </div>
    </>
  );
}
