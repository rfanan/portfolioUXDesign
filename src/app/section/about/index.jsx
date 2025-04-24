import React from "react";

export default function Index() {
  const data = [
    {
      id: 0,
      description:
        "I started my career as a UI/UX Designer after graduating from university in 2022,  I’ve been learning about effective UX design practices—both independently and through various training programs, alongside people from diverse backgrounds and platforms.",
    },
    {
      id: 1,
      description:
        "To me, design is a way of thinking that leads to meaningful solutions. The final output can take many forms: visuals, systems, experiences, or even strategies. Good design isn’t just about looking good—it’s about feeling right",
    },
    {
      id: 2,
      description: " I also continue to explore frontend web development. It allows me to bring my designs to life and experiment with them directly. ",
    },
  ];

  return (
    <>
      <div data-scroll data-scroll-delay="0.1" data-scroll-speed="0.1" className="mx-8 md:mx-14 lg:mx-32 xl:mx-52 justify-center py-10">
        <div className="grid grid-cols-2 w-full content-center text-[#f2f2f2]">
          <div className="text-sm md:text-base xl:text-lg">
            <div>{"{ A bit of me. }"}</div>
          </div>

          <div className="text-sm md:text-base xl:text-lg subpixel-antialiased text-justify text-[#868686] hover:text-[#f2f2f2] transition-all duration-300 ease-in-out">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="mb-6 text-sm">{item.description}</div>
                </div>
              );
            })}
            <div className="text-sm">connect to Linkedln</div>
          </div>
        </div>
      </div>
    </>
  );
}
