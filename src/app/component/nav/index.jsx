import React from "react";

export default function Index() {
  return (
    <>
      <div className="fixed w-full z-50 text-whitePrimary mix-blend-difference">
        <div className="absolute w-full py-8 px-32 ">
          <div className="flex items-center justify-between text-base font-medium ">
            <h1>Logo</h1>
            <div className="flex gap-14 ">
              <h1>Home</h1>
              <h1>about</h1>
              <h1>work</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
