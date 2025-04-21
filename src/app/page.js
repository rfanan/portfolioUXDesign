"use client";
import { useEffect, useRef } from "react";
import { Hero } from "./section/HeroSection";
import Project from "./section/project";
import ProjectDribble from "./section/projectDribble";
import About from "./section/about";
import Navbar from "./component/nav";
import Logo from "./component/logo";
import StickyCursore from "./component/stickyCursore";
import Capability from "./section/about/Capability";
import { useScroll, useTransform, motion } from "framer-motion";
import Footer from "./component/footer";

import HeroSection from "./section/HERO";

export default function Home() {
  const scrollSmooth = useRef();
  const locomotiveScroll = useRef();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollSmooth.current,
        smooth: true,
      });
    })();

    return () => {
      const scroll = locomotiveScroll.current;
      scroll?.destroy();
    };
  }, []);

  // Paralax
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <main className="relative" ref={scrollSmooth}>
      <div className="bg-[#F2F7F2]">
        <StickyCursore />
        <Navbar />

        <HeroSection />
        {/* <Hero /> */}
        <div className="relative">
          <div ref={ref} className="relative flex items-center justify-center min-h-svh overflow-hidden " style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
              <motion.div style={{ y }} className="relative flex flex-wrap w-full h-full">
                <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen">
                  <div className="text-5xl md:text-9xl text-white mix-blend-overlay">UI/UX Designer</div>
                  <p className="absolute text-xl text-white mix-blend-overlay">Rofianan</p>
                </div>
                <img src="/bg/bgParalax.png" className="min-h-svh object-cover object-center w-full -z-10"></img>
              </motion.div>
            </div>
          </div>
        </div>

        <Project />
        <div data-scroll data-scroll-speed="0.5" className="bg-[#0a0a0a] grid content-center min-h-screen mx-1 rounded-lg">
          <About />
          <Capability />
        </div>
        <ProjectDribble />
        <div className="relative">
          <div ref={ref} className="relative flex items-center justify-center min-h-svh overflow-hidden " style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
              <motion.div style={{ y }} className="relative flex flex-wrap w-full h-full">
                <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen">
                  <div className="text-9xl text-white mix-blend-overlay">Looking for job</div>
                  <p className="absolute text-xl text-white mix-blend-luminosity">😊</p>
                </div>
                <video className="w-full min-h-svh object-cover object-center" autoPlay loop playsInline muted>
                  <source src={"/video/Confused.webm"} type="video/mp4" />
                </video>
                <div className="fixed min-h-screen inset-0 bg-gray-900/30" />
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
