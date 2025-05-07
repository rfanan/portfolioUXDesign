import React from "react";
import Magnetic from "../component/animate/magnetic";
import Image from "next/image";
import Button from "../component/button";
import { Command, Dribbble, Facebook, Instagram, Linkedin, Pencil, PenLine, PenTool, Spline, SplineIcon } from "lucide-react";
import Social from "../component/social";
import Magnet from "../component/animate/magnetic";

const HERO = () => {
  const style = "flex justify-center items-center md:border-[0.5px] border-slate-400/10";

  return (
    <main className=" w-full items-center overflow-hidden relative" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="grid place-content-center min-h-screen">
        {/* <Social /> */}
        <div className={`grid grid-cols-24  md:h-[560px]  xl:min-h-screen overflow-hidden`}>
          {/* 0 */}
          <div className={`${style} hidden md:flex lg:row-span-2 xl:row-span-2`}></div>

          {/* 1 */}
          <div className={`${style} hidden md:flex col-span-3 lg:row-span-2 xl:row-span-2`}></div>

          {/* 2 */}
          <div className={`${style} hidden md:flex col-span-20 lg:row-span-2 xl:row-span-2`}></div>
          {/* 3 */}
          <div className={`${style} hidden xl:flex xl:row-span-2`}></div>

          {/* 4 */}
          <div className={`${style} hidden xl:flex col-span-3 xl:row-span-2`}></div>

          {/* 5 */}
          <div className={` ${style} hidden xl:flex col-span-15 px-4 xl:row-span-2`}></div>
          <div className={` ${style} hidden xl:flex col-span-5 px-4 xl:row-span-2`}></div>

          {/* 5 */}
          <div className={`${style} hidden md:flex row-span-2`}></div>

          {/* 6 */}
          <div className={`${style} hidden md:flex col-span-3 row-span-2 bg-[url(/bg/bgParalax.png)] bg-cover bg-center`}>
            <img src="/icon/everyday.png" alt="photobooth" className="rotate-0 lg:w-28 xl:w-44 " />
          </div>

          {/* 7 */}
          <div className={`${style}  md:h-auto col-span-24 md:col-span-11 lg:text-xl xl:text-5xl  text-textPrimary md:row-span-2 px-6`}>
            <div className="">
              <h1 className="text-4xl lg:text-5xl xl:text-5xl font-semibold leading-snug md:leading-relaxed">
                <img src="/icon/star.png" alt="star" className="w-16 lg:w-14 py-4 md:py-0 " />
                Every pixel
                <span className="inline-flex justify-center items-center px-2">
                  <div className="w-14 h-14 md:w-10 md:h-10 xl:w-16 xl:h-16 aspect-square rounded-full bg-blue-600 flex items-center justify-center -mr-3  z-20">
                    <PenTool color="#ffffff" className="w-4 h-4 lg:w-4 lg:h-4" />
                  </div>
                  <div className="w-14 h-14 md:w-10 md:h-10 xl:w-16 xl:h-16  aspect-square rounded-full bg-green-600 flex items-center justify-center -z-10">
                    <Spline color="#ffffff" className="w-4 h-4 lg:w-4 lg:h-4" />
                  </div>
                </span>
                matters. makes it meaningful, clarity, and humane.
              </h1>
            </div>
          </div>

          {/* 8 */}

          <div className={`${style} hidden md:flex col-span-9 row-span-2 bg-[url(/bg/typoghrapy.png)] bg-cover bg-center`}>
            <div className="bg-cover bg-center"></div>
          </div>

          <div className={`${style} hidden md:flex`}></div>

          {/* 10 */}
          <div className={`${style} hidden md:flex  col-span-3 `}></div>

          {/* 11 */}
          <div className={`${style}  h-60 md:h-auto col-span-24 md:col-span-13 px-6 text-textPrimary/50 flex-col lg:gap-y-5 xl:gap-y-10`}>
            <h1 className="text-sm lg:text-sm xl:text-lg">
              Hey there! <a className="inline-flex transform px-2 font-medium -rotate-3 bg-lime-500 z-50"> I'm Rofianan </a>, Thanks for visiting my portfolio! I hope you enjoy exploring my work, If
              you'd like to connect or know more about me, feel free to check out my social media — Who knows? We might become friends or even collaborate on something awesome in the future. 😊
            </h1>
            <div className="flex text-sm gap-x-2 lg:text-sm xl:text-lg w-full md:gap-x-4 text-textPrimary/50 cursor-pointer">
              <div className="relative inline-flex group cursor-pointer">
                <Magnet>
                  <h1 className="hover:text-textPrimary  duration-200 transition-all ease-in-out " onClick={() => window.open("https://www.linkedin.com/in/rofi-anan/", "_blank")}>
                    {" { linkedln }"}
                  </h1>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </Magnet>
              </div>
              <div className="relative inline-flex group cursor-pointer">
                <Magnet>
                  <h1 className="hover:text-textPrimary duration-200 transition-all ease-in-out" onClick={() => window.open("https://dribbble.com/Nyutakun", "_blank")}>
                    {" { dribbble }"}
                  </h1>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </Magnet>
              </div>
              <div className="relative inline-flex group cursor-pointer">
                <Magnet>
                  <h1 className="hover:text-textPrimary duration-200 transition-all ease-in-out" onClick={() => window.open("https://www.instagram.com/rfanann/", "_blank")}>
                    {" { instagram }"}
                  </h1>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </Magnet>
              </div>
            </div>
          </div>

          {/* 12 */}
          <div className={`${style} hidden md:flex  col-span-7`}>
            <div className="w-full flex justify-start">
              <h1 className="rotate-90 lg:text-lg font-medium text-textPrimary/50">Summary</h1>
            </div>
          </div>

          {/* 13 */}
          <div className={`${style} hidden col-span-1 md:flex`}></div>

          {/* 14 */}
          <div className={`${style} hidden md:flex  col-span-3`}>
            <div>
              <img src="/icon/feedback.png" alt="feedback icon" className=" lg:w-16 xl:w-32 z-20" />
            </div>
          </div>

          {/* 15 */}
          <div className={`${style} hidden md:flex col-span-15`}></div>
          <div className="hidden md:flex  col-span-5 bg-lime-600 relative px-5">
            <div className="flex flex-col h-full">
              {/* Kutip Awal */}
              <span className="lg:text-xl xl:text-7xl text-white lg:mt-3 xl:mt-5">❝</span>

              {/* Quote Text */}
              <h1 className=" lg:text-base xl:text-3xl font-bold text-white italic xl:-translate-y-4">
                The details are not the details. They make the design <span className="text-sm font-normal"> ~ Charles Eames</span>
              </h1>

              {/* Kutip Akhir - pojok kanan bawah */}
              <span className="lg:text-xl xl:text-7xl text-white absolute lg:translate-y-3 lg:bottom-2 lg:right-3 xl:translate-y-5 xl:bottom-1 xl:right-5">❞</span>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center w-full gap-y-1">
          <Image src="/icon/cat.png" width={60} height={0} alt="photobooth" className="z-10 rotate-12 left-10 relative -skew-x-12" />
          <Image src="/icon/command.png" width={80} height={0} alt="photobooth" className="-z-0 rotate-12 left-8 -mt-10 relative -skew-x-12" />
        </div> */}
        {/* END OF Grid */}

        {/* scrll down */}
        <div className="relative">
          <div className="w-full absolute flex justify-center inset-x-0  md:bottom-5">
            <div className="flex flex-col items-center">
              <div className="flex justify-center"></div>
              <Magnetic>
                <video width={45} src="/video/scrollanimate.webm" loop autoPlay muted playsInline />
              </Magnetic>
              <Magnetic>
                <p className="text-sm">Scroll Down</p>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HERO;
