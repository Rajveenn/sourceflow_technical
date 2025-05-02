"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BoltIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TypeAnimation } from "react-type-animation";
import { FaCaretDown, FaCaretRight, FaFileUpload } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const solutionsVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <nav className="text-gray-800 p-4 bg-slate-200 shadow-2xl fixed z-10 w-full">
      <div className="container lg:px-8 mx-auto my-auto flex justify-between items-center place-items-center">
        <Link href="/">
          <p className=" text-blue-800 font-bold">
            {" "}
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
                ``,
                1200,
                "",
              ]}
              repeat={Infinity}
            />
          </p>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <motion.div
                key="close-icon"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.3, 0.07, 0.19, 0.97] }}
              >
                <XMarkIcon className="w-6 h-6 text-[#09009f]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.3, 0.07, 0.19, 0.97] }}
              >
                <Bars3Icon className="w-6 h-6 text-[#09009f]" />
              </motion.div>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:underline font-bold">
              For Jobseekers <FaCaretDown className="text-blue-800" />
            </button>
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-96 bg-gray-50 text-black py-4 rounded-lg shadow-xl z-50 grid grid-cols-2 gap-6 border border-gray-200"
                >
                  <div>
                    <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                      <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                      Hybrid Jobs
                    </div>
                    <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                      <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                      Remote Jobs
                    </div>
                  </div>
                  <div>
                    <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                      <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                      Hybrid Jobs 1
                    </div>
                    <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                      <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                      Remote Jobs 2
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="flex items-center gap-1 hover:underline font-bold">
            For Clients <FaCaretDown className="text-blue-800" />
          </button>
          <button className="flex items-center gap-1 hover:underline font-bold">
            Sectors <FaCaretDown className="text-blue-800" />
          </button>
          <button className="flex items-center gap-1 hover:underline font-bold">
            Resources <FaCaretDown className="text-blue-800" />
          </button>

          <button className="flex items-center gap-1 hover:bg-[#F99D76] font-bold bg-[#FCDF69] px-3 py-2 text-[14px] rounded-full">
            Upload CV <FaFileUpload className="text-black ml-2" />
          </button>

          <button className="flex items-center gap-1 hover:bg-[#FCDF69] font-bold bg-[#F99D76] px-3 py-2 text-[14px] rounded-full">
            Contact Us <FaMobileButton className="text-black ml-2" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}{" "}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-200 shadow-2xl">
          <div className="flex flex-col mt-4">
            <motion.div
              className="items-center justify-center m-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex justify-between items-center text-left px-4 py-2 rounded font-medium"
              >
                For Jobseekers
                <FaCaretRight
                  className={`w-5 h-5 transform transition-transform text-blue-800 ${
                    isSolutionsOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </motion.div>
            <motion.div
              variants={solutionsVariants}
              initial="closed"
              animate={isSolutionsOpen ? "open" : "closed"}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col pl-6">
                <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                  <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                  Hybrid Jobs
                </div>
                <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                  <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                  Remote Jobs
                </div>
                <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                  <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                  Hybrid Jobs 1
                </div>
                <div className="group flex items-center px-5 py-3 hover:bg-cyan-100 hover:text-blue-900 rounded-md">
                  <BoltIcon className="w-6 h-6 mr-3 text-cyan-600 group-hover:text-cyan-500" />
                  Remote Jobs 2
                </div>
              </div>
            </motion.div>
            <motion.div
              className="items-center justify-center m-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button className="flex justify-between items-center text-left px-4 py-2 rounded font-medium">
                For Clients
                <FaCaretRight className="w-5 h-5 transform transition-transform text-blue-800 " />
              </button>
            </motion.div>
            <motion.div
              className="items-center justify-center m-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button className="flex justify-between items-center text-left px-4 py-2 rounded font-medium">
                Sectors
                <FaCaretRight className="w-5 h-5 transform transition-transform text-blue-800 " />
              </button>
            </motion.div>
            <motion.div
              className="items-center justify-center m-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button className="flex justify-between items-center text-left px-4 py-2 rounded font-medium">
                Resources
                <FaCaretRight className="w-5 h-5 transform transition-transform text-blue-800 " />
              </button>
            </motion.div>
            {/* <div className="flex flex-row p-2 justify-between items-center">
              <button className="flex items-center gap-1 hover:underline font-bold bg-amber-300 px-3 py-2 text-[14px] rounded-full">
                Upload CV
              </button>

              <button className="flex items-center gap-1 hover:underline font-bold bg-red-300 px-3 py-2 text-[14px] rounded-full">
                Contact us
              </button>
            </div> */}
            <div className="flex flex-row p-2 justify-between items-center">
              <button className="flex items-center text-center px-4 py-2 rounded font-bold bg-amber-300 text-[14px]">
                Upload CV <FaFileUpload className="text-slate-200 ml-2" />
              </button>
            </div>
            <div className="flex flex-row p-2 justify-between items-center">
              <button className="flex items-center text-center px-4 py-2 rounded font-bold bg-red-300 text-[14px]">
                Contact Us <FaMobileButton className="text-slate-200 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
