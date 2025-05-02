import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GrCurrency } from "react-icons/gr";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCaretRight,
} from "react-icons/fa";
import ReactiveButton from "reactive-button";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const CARD_DATA = [
  {
    title: "Software Engineer",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    bgColor: "#FCDF69",
    textColor: "#064EA4",
    location: "London",
    salary: "$65,000",
    datePosted: "29/12/2024",
    image: "/images/python-logo.png",
  },
  {
    title: "Fullstack Developer",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    bgColor: "#064EA4",
    textColor: "#FFF",
    location: "USA",
    salary: "$75,000",
    datePosted: "09/02/2025",
    image: "/images/angularjs-logo.png",
  },
  {
    title: "Backend Developer",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    bgColor: "#F99D76",
    textColor: "#064EA4",
    location: "Perth",
    salary: "$55,000",
    datePosted: "29/08/2024",
    image: "/images/JavaScript_logo.png",
  },
  {
    title: "DevOps Engineer",
    description:
      "Manage CI/CD pipelines and ensure smooth deployment processes.",
    bgColor: "#A8E6CF",
    textColor: "#064EA4",
    location: "Singapore",
    salary: "$85,000",
    datePosted: "01/05/2025",
    image: "/images/JavaScript_logo.png",
  },
  {
    title: "Fullstack Developer",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    bgColor: "#064EA4",
    textColor: "#FFF",
    location: "Malaysia",
    salary: "$75,000",
    datePosted: "09/02/2025",
    image: "/images/angularjs-logo.png",
  },
];

function Cards() {
  const [state, setState] = useState("idle");
  const scrollRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < CARD_DATA.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const onClickHandler = () => {
    setState("loading");

    // send an HTTP request
    setTimeout(() => {
      setState("success");
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="bg-[#D7E7FB] shadow hover:shadow-2xl transition-shadow duration-300 pt-8">
      <div
        ref={scrollRef}
        style={{ overflow: "scroll" }}
        className="text-center font-bold text-[#0E2152] py-4 rounded-md text-xl lg:text-2xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        >
          Latest Jobs
        </motion.div>
      </div>
      <div className="mt-2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[10%] mx-auto mb-6"></div>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-6 px-4 sm:px-6 lg:px-8 py-8 shadow-2xl">
        {CARD_DATA.slice(startIndex, startIndex + 3).map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between lg:w-[400px] w-11/12 overflow-hidden shadow-lg hover:shadow-2xl rounded-2xl px-3 py-4 transition-shadow duration-300 ease-in-out hover:cursor-pointer"
            style={{ backgroundColor: card.bgColor }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.div variants={itemVariants}>
                <Image
                  src={card.image}
                  width={50}
                  height={50}
                  alt=""
                  className="w-[50px] h-[50px] rounded-2xl object-contain bg-center m-2"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-2xl font-bold m-2"
                style={{ color: card.textColor }}
              >
                {card.title}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 font-bold m-2"
                style={{ color: card.textColor }}
              >
                <FaLocationDot />
                <span>{card.location}</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 font-bold m-2"
                style={{ color: card.textColor }}
              >
                <GrCurrency />
                <span>{card.salary}</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="font-medium m-2 text-sm"
                style={{ color: card.textColor }}
              >
                {card.description}
              </motion.div>

              <motion.div
                variants={itemVariants}
                style={{ color: card.textColor }}
              >
                <div className="flex items-center justify-center mt-4">
                  <button className="bg-slate-200 text-black px-5 py-2 rounded-md hover:bg-slate-400 transition flex items-center justify-center shadow-2xl hover:shadow-3xl">
                    View This Job <FaCaretRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="font-medium m-2 text-sm"
                style={{ color: card.textColor }}
              >
                <div
                  className="flex items-center gap-2 my-4 text-sm"
                  style={{ color: card.textColor }}
                >
                  <span className="m-2">Posted on : {card.datePosted}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-8 lg:px-34 pb-6 bg-[#D7E7FB] shadow hover:shadow-2xl transition-shadow duration-300">
        <div className="flex gap-4">
          <FaArrowAltCircleLeft
            className="text-3xl text-[#0E2152] hover:text-blue-500 cursor-pointer"
            onClick={handlePrev}
          />
          <FaArrowAltCircleRight
            className="text-3xl text-[#0E2152] hover:text-blue-500 cursor-pointer"
            onClick={handleNext}
          />
        </div>
        <ReactiveButton
          style={{ backgroundColor: "#0E2152", color: "white" }}
          type="button"
          width={"200px"}
          height={"50px"}
          shadow
          rounded
          buttonState={state}
          idleText={
            <div className="flex items-center justify-center w-full h-full">
              View More Jobs
              <FaCaretRight className="ml-2 w-5 h-5" />
            </div>
          }
          loadingText={
            <div className="flex items-center justify-center w-full h-full">
              On The Way...
              <i className="pi pi-spin pi-spinner ml-2 inline-flex" />
            </div>
          }
          successText={
            <div className="flex items-center justify-center w-full h-full">
              Here We Go!
              <i className="pi pi-check ml-2 inline-flex" />
            </div>
          }
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
}

export default Cards;
