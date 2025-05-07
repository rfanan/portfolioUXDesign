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
  },
  {
    title: "Photocomics",
    category: "Design & Web Development",
    color: "black",
    src: "PhotoComics.png",
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
    <main className={`flex flex-col py-14 px-4 md:px-36 xl:px-44 min-h-screen justify-center items-center`}>
      <p className="py-10 px-10 w-full text-textPrimary/50">{`{ Recent project } `}</p>
      <div className={`felx flex-wrap items-center justify-center w-full`}>
        {dataSlice.map((project, index) => {
          return <List key={index} index={index} title={project.title} category={project.category} setModal={setModal} />;
        })}
      </div>
      <div className="hidden md:block">
        <Modal modal={modal} projects={projects} />
      </div>
      {/* Button */}
      <div className="my-16">
        <Magnet>
          <Button onClick={() => Swal.fire({ title: "Oops!", text: " This function is being improved. Stay tuned!", icon: "info", confirmButtonText: "Okay", confirmButtonColor: "#328E6E" })}>
            <MoveUpRight />
            Archive
            <h1>( {countData} )</h1>
          </Button>
        </Magnet>
      </div>
    </main>
  );
}
