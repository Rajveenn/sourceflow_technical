"use client";
import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90">
      <div className="flex flex-col items-center justify-center gap-6 p-6 bg-[#064EA4] w-[400px] rounded-lg shadow-lg">
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
        <div className="h-1 w-32 bg-slate-100 animate-pulse rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
