"use client";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

export default function Footer() {
  return (
    <footer className="bg-[#064EA4] text-white py-10 px-6 md:px-20">
      {/* Top: Brand and Icons */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mb-10 space-y-4 md:space-y-0 justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <h3 className="text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:font-semibold cursor-pointer">
          <TypeAnimation
            style={{ whiteSpace: "pre-line", display: "block" }}
            sequence={[
              "Software",
              1200,
              "Software Recruitment",
              1200,
              "Software Recruitment Co.",
              1200,
              "",
              1200,
              "",
            ]}
            repeat={Infinity}
          />
        </h3>
        <div className="flex gap-4 text-2xl">
          <FaLinkedinIn className="hover:animate-spin cursor-pointer transition" />
          <FaFacebookF className="hover:animate-spin cursor-pointer transition" />
          <FaInstagram className="hover:animate-spin cursor-pointer transition" />
          <FaTwitter className="hover:animate-spin cursor-pointer transition" />
        </div>
      </div>

      {/* Bottom: Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        {/* Explore */}
        <div>
          <h4 className="text-lg font-bold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Homepage",
              "For jobseekers",
              "For clients",
              "Our sectors",
              "Resources",
              "Contact us",
            ].map((item, i) => (
              <li
                key={i}
                className="transition-all duration-300 transform hover:scale-105 hover:font-semibold cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h4 className="text-lg font-bold mb-3">Sectors</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Software engineering",
              "DevOps",
              "Cloud",
              "Infrastructure",
              "Testing",
              "Security",
            ].map((item, i) => (
              <li
                key={i}
                className="transition-all duration-300 transform hover:scale-105 hover:font-semibold cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Nav item", "Nav item", "Nav item", "Nav item", "Nav item"].map(
              (item, i) => (
                <li
                  key={i}
                  className="transition-all duration-300 transform hover:scale-105 hover:font-semibold cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center text-sm hover:animate-bounce">
        <div>© 2025 Copyright: Rajveender Singh</div>
      </div>
    </footer>
  );
}
