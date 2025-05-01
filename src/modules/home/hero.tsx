import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#064EA4] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-20 left-10 w-80 h-80 bg-orange-300 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full translate-x-1/2 translate-y-1/2 z-0 animate-bounce" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-16 gap-10">
        <div className="text-white space-y-6">
          <p className="text-[18px] font-bold">Software Recruitment Specialists</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Elevate your career
          </h1>

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
            <Image
              src="/images/hero-woman.png"
              width={1000}
              height={1000}
              alt="Woman holding laptop"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
