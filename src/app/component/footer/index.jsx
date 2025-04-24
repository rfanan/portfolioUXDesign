"use client";
import React, { useEffect, useRef, useState } from "react";
import MatterScene from "../../test";
import Magnet from "../../component/animate/magnetic";
import Button from "../button";
import { ArrowLeft, ArrowRightCircle } from "lucide-react";

export default function Index() {
  const [LocalTime, setLocalTime] = useState(null);

  useEffect(() => {
    const Time = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);
    return () => clearInterval(Time);
  }, []);

  return (
    <>
      <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} className="relative overflow-hidden min-h-screen">
        <div className="fixed top-0 w-full">
          <div className="relative bg-PrimaryBlack text-slate-100 min-h-svh">
            <div className="absolute inset-x-0 top-1/4 xl:top-[15%] flex flex-col justify-center items-center z-50 ">
              <div className="z-50" onClick={() => alert("halo")}>
                <h1 className="text-6xl md:text-8xl xl:text-9xl">Get in touch</h1>
              </div>
              <Magnet className="z-50 pt-2">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Rofianan05@gmail.com&su=Halo&body=Write%20message" target="_blank" rel="noopener noreferrer">
                  <Button className="relative text-sm flex gap-x-2 h-14 w-30 px-5 outline ">
                    <ArrowRightCircle size={17} />
                    Rofianan05@gmail.com
                  </Button>
                </a>
              </Magnet>
            </div>
            <div className="absolute bottom-1/3 px-5 md:bottom-52 lg:bottom-[17%] xl:bottom-1/4 z-0 inset-x-0">
              <MatterScene />
            </div>
            {/* footer */}
            <div className="absolute w-auto bottom-5 md:bottom-1 lg:bottom-1 inset-x-0  xl:bottom-1 ">
              <div className="flex flex-wrap-reverse md:flex-nowrap px-4 lg:px-10  justify-between h-44 md:h-36 lg:h-24 xl:h-14 items-center xl:px-28">
                <div className="w-full">
                  <div className="flex justify-between lg:justify-normal lg:gap-x-6">
                    <div>
                      <div className="text-xs text-whitePrimary/50">{`{ Version }`} </div>
                      <div className="text-sm text-whitePrimary">{new Date().getFullYear()} @Portfolio </div>
                    </div>
                    <div>
                      <div className="text-xs text-whitePrimary/50"> {`{ Local time }`}</div>
                      <div className="text-sm">{LocalTime ? LocalTime.toLocaleTimeString() : "loading"}</div>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden block border border-slate-300/30 w-full opacity-35"></div>
                <div className=" w-auto">
                  <div className="flex flex-col">
                    <div className="text-xs py-1 text-whitePrimary/50">{`{ Social }`}</div>
                    <div className="flex gap-x-6 md:gap-x-4 text-sm text-whitePrimary">
                      <Magnet>
                        <h1 onClick={() => window.open("https://www.linkedin.com/in/rofi-anan/", "_blank")}>Linkedln</h1>
                      </Magnet>
                      <Magnet>
                        <h1 onClick={() => window.open("https://dribbble.com/Nyutakun", "_blank")}>Dribble</h1>
                      </Magnet>
                      <Magnet>
                        <h1 onClick={() => window.open("https://www.instagram.com/rfanann/", "_blank")}>Instagram</h1>
                      </Magnet>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
