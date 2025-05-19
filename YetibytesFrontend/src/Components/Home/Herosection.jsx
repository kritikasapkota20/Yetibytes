import React from "react";
import yetibyteslogo from "../../assets/yetibyteslogo.png";
import banner from "../../assets/Banner.svg";

const Herosection = () => {
  return (
    <div className="w-full h-screen bg-[#edf7ff]">
      {/* Hero Section with curved bottom */}
      <section className="relative flex items-center justify-center h-full w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10 text-center max-w-7xl px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovative IT Solutions.  Real Business Impact.
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            At Yetibytes, we empower businesses with smart, scalable, and secure IT solutions.
            From custom software development to digital strategy — we turn technology into your competitive edge.
            Partner with Yetibytes and build what's next.
          </p>
          <button className="bg-primary hover:bg-primaryHover text-white text-base font-medium px-10 py-3 rounded-lg shadow-lg transition-all">
            Let's work together
          </button>
        </div>

        {/* Curved SVG Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 150"
            className="w-full h-20 md:h-32"
            preserveAspectRatio="none"
          >
            <path
              fill="#EDF7FF"
              fillOpacity="1"
              d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
