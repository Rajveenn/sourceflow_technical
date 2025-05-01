import Marquee from "react-fast-marquee";
import Image from "next/image";

const logo_data = [
  {
    src: "/images/microsoft-logo.png",
    alt: "Client Image",
  },
  {
    src: "/images/oracle-logo.png",
    alt: "Client Image",
  },
  {
    src: "/images/atlassian-logo.png",
    alt: "Client Image",
  },
  {
    src: "/images/cloudflare-logo.png",
    alt: "Client Image",
  },

  {
    src: "/images/vmware-logo.png",
    alt: "Client Image",
  },
  {
    src: "/images/digitalocean-logo.png",
    alt: "Client Image",
  },
];

function Partners() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full bg-slate-200 shadow-2xl">
      <div className="text-center mb-8 text-[18px] font-bold text-black">
        Partnered with Esteemed Brands
      </div>
      <div className="mt-2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[10%] mx-auto mb-6"></div>
      <div className="w-9/10 mx-auto overflow-hidden">
        <Marquee
          className="flex space-x-4"
          aria-label="Brands"
          pauseOnHover={true}
          gradient={true}
        >
          {logo_data.map((image, index) => (
            <div key={index} className="flex-shrink-0 inline-block px-5">
              <Image
                src={image.src}
                width={150}
                height={100}
                alt={image.alt}
                className="transform hover:scale-110 hover:brightness-125 transition-all duration-300 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;
