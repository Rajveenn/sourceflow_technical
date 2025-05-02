import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const scrollRef = useRef(null);
  return (
    <section
      style={{ minHeight: "80vh" }}
      className="relative bg-[#064EA4] min-h-screen flex items-center justify-center overflow-hidden pt-10"
    >
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-teal-300 to-teal-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-bounce lg:animate-spin" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full translate-x-1/2 translate-y-1/2 z-0 animate-bounce" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-16 gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
            className="font-black text-2xl lg:text-5xl text-white leading-tight mb-5"
          >
            Software Recruitment Specialists <br />
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-500 my-5"
            >
              Elevate your career
            </motion.span>
          </motion.h1>
          <div className="flex max-w-md overflow-hidden rounded-full bg-white shadow-md">
            <input
              type="text"
              placeholder="E.g. networking"
              className="flex-grow px-6 py-3 rounded-l-full focus:outline-none text-gray-700"
            />
            <button className="bg-yellow-400 px-6 py-3 text-sm font-semibold text-gray-800 rounded-r-full">
              Search jobs
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="bg-white rounded-[2rem] overflow-hidden w-full max-w-lg">
            {/* <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef }}
            > */}{" "}
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-500 my-5"
            >
              <Image
                src="/images/hero-woman.png"
                width={1000}
                height={1000}
                alt="Woman holding laptop"
                className="w-full h-full object-cover transform hover:scale-110 hover:brightness-125"
                priority
              />
            </motion.span>
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
