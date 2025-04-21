import { useRef, useEffect } from "react";
import gsap from "gsap";
import clsx from "clsx";

export default function Button(props) {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);
  const { className = "bg-[#222831] text-white px-8 py-6", children, text, type = "submit", ...rest } = props;

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = gsap.utils.pipe(gsap.utils.mapRange(0, width, 0, 100), gsap.utils.clamp(0, 100))(e.clientX - left);
      const y = gsap.utils.pipe(gsap.utils.mapRange(0, height, 0, 100), gsap.utils.clamp(0, 100))(e.clientY - top);
      return { x, y };
    };

    const handleEnter = (e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);
      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleLeave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);
      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMove = (e) => {
      const { x, y } = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);
    button.addEventListener("mousemove", handleMove);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
      button.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      className={clsx(
        className,
        "[&>svg]:h-7 [&>svg]:w-7 [&>svg]:hover:bg-black relative overflow-hidden w-fit rounded-full font-semibold text-white hover:text-black inline-flex items-center justify-center transition-colors duration-200 ease-in-out"
      )}
      {...rest}
    >
      {/* Flair */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: "scale(0)", transformOrigin: "0 0", willChange: "transform" }} ref={flairRef}>
        <div className="absolute w-[170%] aspect-square bg-[#67AE6E] rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Label */}
      <span className="relative z-10 flex gap-x-3 items-center">{text || children}</span>
    </button>
  );
}
