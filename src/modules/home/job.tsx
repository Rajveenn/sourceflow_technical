import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GrCurrency } from "react-icons/gr";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ReactiveButton from "reactive-button";
import { useState } from "react";

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
];

function Cards() {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");

    // send an HTTP request
    setTimeout(() => {
      setState("success");
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="bg-[#D7E7FB] shadow hover:shadow-2xl transition-shadow duration-300">
      <div className="text-center text-2xl md:text-[25px] font-bold text-[#0E2152] py-4 rounded-md ">
        Latest Jobs
      </div>
      <div className="mt-2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[10%] mx-auto mb-6"></div>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-6 px-4 sm:px-6 lg:px-8 py-8 shadow-2xl">
        {CARD_DATA.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between lg:w-[400px] w-11/12 overflow-hidden shadow-lg hover:shadow-2xl rounded-2xl px-3 py-4 transition-shadow duration-300 ease-in-out hover:cursor-pointer"
            style={{ backgroundColor: card.bgColor }}
          >
            <div>
              <Image
                src={card.image}
                width={50}
                height={50}
                alt=""
                className="w-[50px] h-[50px] rounded-2xl object-contain bg-center m-2"
              />
              <div
                className="text-2xl font-bold m-2"
                style={{ color: card.textColor }}
              >
                {card.title}
              </div>
              <div
                className="flex items-center gap-2 font-bold m-2"
                style={{ color: card.textColor }}
              >
                <FaLocationDot />
                <span>{card.location}</span>
              </div>
              <div
                className="flex items-center gap-2 font-bold m-2"
                style={{ color: card.textColor }}
              >
                <GrCurrency />
                <span>{card.salary}</span>
              </div>
              <div
                className="font-medium m-2 text-sm"
                style={{ color: card.textColor }}
              >
                {card.description}
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <ReactiveButton
                style={{ backgroundColor: "#fff", color: "black" }}
                type="button"
                width={"250px"}
                height={"50px"}
                shadow
                rounded
                buttonState={state}
                idleText={
                  <div className="flex items-center justify-center w-full h-full">
                    View This Job
                    <ChevronRightIcon className="ml-2 w-5 h-5" />
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
            <div
              className="flex items-center gap-2 my-4 text-sm"
              style={{ color: card.textColor }}
            >
              <span>Posted on : {card.datePosted}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-8 lg:px-34 pb-6 bg-[#D7E7FB] shadow hover:shadow-2xl transition-shadow duration-300">
        <div className="flex gap-4">
          <FaArrowAltCircleLeft className="text-3xl text-[#0E2152] hover:text-blue-500 cursor-pointer" />
          <FaArrowAltCircleRight className="text-3xl text-[#0E2152] hover:text-blue-500 cursor-pointer" />
        </div>
        <button className="bg-[#0E2152] text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition">
          View More Jobs
        </button>
      </div>
    </div>
  );
}

export default Cards;
