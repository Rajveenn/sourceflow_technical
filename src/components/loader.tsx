"use client";
import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-10">
      <div className="flex flex-col items-center justify-center gap-6 p-6 bg-slate-100 w-[400px] rounded-lg shadow-lg m-10">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center">
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            sequence={[
              "Software",
              1200,
              `Software Recruitment`,
              1200,
              `Software Recruitment Co.`,
              1200,
              `Software Recruitment Co. is`,
              1200,
              `Software Recruitment Co. is Loading`,
              1200,
              "",
            ]}
            repeat={Infinity}
          />
        </div>
        <div className="h-2 w-50 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
