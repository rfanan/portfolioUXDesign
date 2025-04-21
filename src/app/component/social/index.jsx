import React from "react";
import { Dribbble, Facebook, Instagram, Linkedin } from "lucide-react";
import Magnetic from "../animate/magnetic";

const index = () => {
  return (
    <div className="fixed z-50 flex right-0 justify-center items-center h-screen">
      <div className="bg-[#328E6E] p-5 flex flex-col  gap-y-5">
        <Magnetic>
          <Linkedin onClick={() => window.open("https://www.linkedin.com/in/rofi-anan/", "_blank")} size={20} color="#F2F7F2" />
        </Magnetic>
        <Magnetic>
          <Dribbble onClick={() => window.open("https://dribbble.com/Nyutakun", "_blank")} size={20} color="#F2F7F2" />
        </Magnetic>
        <Magnetic>
          <Instagram onClick={() => window.open("https://www.instagram.com/rfanann/", "_blank")} size={20} color="#F2F7F2" />
        </Magnetic>
        <Magnetic>
          <Facebook onClick={() => window.open("https://www.instagram.com/rfanann/", "_blank")} size={20} color="#F2F7F2" />
        </Magnetic>
      </div>
    </div>
  );
};

export default index;
