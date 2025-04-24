import React from "react";

export default function Capability() {
  const data = [
    { title: "UI/UX Design", description: "Website & Mobile Design" },
    {
      title: "Graphic Design",
      description: "Social Media Design, Branding, Presentation, Company Profile",
    },
    {
      title: "Front End",
      description: "Landing page, Company profile, Portfolio Website",
    },
  ];

  return (
    <>
      <div data-scroll data-scroll-delay="0.1" data-scroll-speed="0.1" className="flex mx-8 md:mx-14 lg:mx-32 xl:mx-52 justify-center py-6">
        <div className="grid grid-cols-2 w-full content-center  text-[#f2f2f2]">
          <div className=" text-sm md:text-base xl:text-lg">
            <div>{"{ Capabilities. }"}</div>
          </div>
          <div className="">
            <div className=" text-sm md:text-base xl:text-lg subpixel-antialiased gap-x-6 text-justify ">
              {data.map((item, index) => {
                return (
                  <div key={index} className="text-[#868686] hover:text-[#f2f2f2] transition-all duration-300 ease-in-out">
                    <div className="text-lg md:text-4xl pb-2">{item.title}</div>
                    <div className="text-sm">{item.description}</div>
                    <div className=" py-6">
                      <div className="border border-slate-200/20 opacity-35" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
