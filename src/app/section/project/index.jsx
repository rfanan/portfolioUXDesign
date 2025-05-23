import React from "react";
import { useState } from "react";
import List from "./list";
import Modal from "./modal";
import styles from "./style.module.css";
import Button from "../../component/button";
import { MoveUpRight } from "lucide-react";
import Swal from "sweetalert2";
import Magnet from "../../component/animate/magnetic";

const projects = [
  {
    title: "Kalem",
    category: "UI/UX Design (Mobile)",
    color: "black",
    src: "kalem.png",
    url: "https://www.behance.net/gallery/201844075/Kalem-Mental-healt-app",
  },
  {
    title: "Photocomics",
    category: "Design & Development",
    color: "black",
    src: "PhotoComics.png",
    url: "https://photocomics.netlify.app/",
  },
  {
    title: "Maxim",
    category: "UI/UX Design",
    color: "black",
    src: "maximthumbnail.png",
  },
  {
    title: "Telkom",
    category: "UI/UX Design (Mobile)",
    color: "black",
    src: "1.png",
  },
];

const dataSlice = projects.slice(0, 3);
const countData = projects.length;

export default function main() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={`flex flex-col py-14 px-4 md:px-16 lg:px-28 xl:px-44 min-h-screen justify-center items-center`}>
      <div className="flex py-10 md:pl-11 lg:pl-14 xl:pl-20 w-full text-textPrimary/50">{`{ Recent project } `}</div>
      <div className={`felx flex-wrap items-center justify-center w-full`}>
        {dataSlice.map((project, index) => {
          return <List key={index} index={index} src={project.src} title={project.title} category={project.category} url={project.url} setModal={setModal} />;
        })}
      </div>
      <div className="hidden md:block">
        <Modal modal={modal} projects={projects} />
      </div>
      {/* Button */}
      <div className="my-16">
        <Magnet>
          <Button
            onClick={() =>
              Swal.fire({
                title: "Oops!",
                text: " This function is being improved. Stay tuned!",
                icon: "info",
                confirmButtonText: "Okay",
                confirmButtonColor: "#328E6E",
                backdrop: `
              rgba(0,0,123,0.4)
              url("https://gist.githubusercontent.com/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif")
              left top  / 250px 150px
              no-repeat
              `,
              })
            }
          >
            <MoveUpRight />
            Archive
            <h1>( {countData} )</h1>
          </Button>
        </Magnet>
      </div>
    </main>
  );
}
