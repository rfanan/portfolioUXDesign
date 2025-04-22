import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Navbar from "../component/Header";
import DecryptedText from "../component/decryptText";
import Magnetic from "../component/animate/magnetic";
import Social from "../component/social";
const myFont = localFont({
  src: [
    {
      path: "../fonts/Pecita.otf",
      weight: "200",
      style: "normal",
      height: "normal",
    },
  ],
});

export const Hero = () => {
  return (
    <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} className="relative overflow-hidden min-h-screen">
      <div className={`fixed top-0`}>
        {/* <Social /> */}
        {/* className={`bg-dots`} */}
        <div className=" h-screen flex flex-col justify-center items-center gap-2 xl:mx-32">
          {/* image & text how are u */}
          {/* absolute top-52 right-5 inset-y-4  lg:top-16 lg:right-96 */}
          <div className="relative left-28 translate-y-6 md:translate-y-3 lg:left-44 xl:left-56">
            {/* <MousePointerClick size={36} strokeWidth={3} absoluteStrokeWidth className="relative right-8" /> */}

            <Image src={"icon/polygon.svg"} sizes="100vw" width={0} height={0} alt="image" className="relative right-8 w-8 h-8" />
            <div className="bg-PrimaryBlack shadow-md p-1 px-3 rounded-lg border-[4px] border-slate-100 shadow-mdz shadow-slate-400 md:p-[5px] md:px-4">
              <h1 className="text-xs text-[#E3FDFD] md:text-sm antialiased">How are u ?</h1>
            </div>
          </div>
          {/* untuk text helo */}
          <div className={`${myFont.className}`}>
            <div className="text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[19rem] leading-none text-textPrimary">
              <DecryptedText
                text="Hello"
                speed={100}
                maxIterations={30}
                characters="JOKOWI?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
                revealDirection="center"
              />
            </div>
          </div>
          {/* ini untuk text isi */}
          <div className="text-center px-4 md:px-8 lg:px-44 xl:px-64 -translate-y-7 lg:-translate-y-12">
            <div className="text-sm md:text-lg lg:text-base xl:text-xl text-textPrimary/50">
              Hey there! <a className="bg-[#328E6E] p-1 inline-block transform -rotate-3 -skew-y-3 text-white">I'm Rofianan</a>, Thanks for visiting my portfolio! I hope you enjoy exploring my work,
              If you'd like to connect or know more about me, feel free to check out my social media — Who knows? We might become friends or even collaborate on something awesome in the future. 😊
            </div>
          </div>
          {/* ini text paling bawah */}

          <div className="absolute flex justify-center bottom-6 inset-x-0">
            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <Magnetic>
                  <video width={54} src="/video/scrollanimate.webm" loop autoPlay muted playsInline />
                </Magnetic>
              </div>
              <Magnetic>
                <p className="text-sm">Scroll Down</p>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
