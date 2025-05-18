import React from 'react'
import yetibyteslogo from '../../assets/yetibyteslogo.png'
import banner from '../../assets/Banner.png'

const Herosection = () => {
  return (
    <div className="min-h-scree bg-[#edf7ff]">
      {/* Hero Section with curved bottom */}
      <section className="relative text-white h-[700px]  w-full overflow-hidden ">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container mx-auto px-10 h-full flex items-center relative z-10">
          <div className="max-w-3xl mx-aut px-4 md:pl-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Launch Your App</h1>
            <p className="text-2xl md:text-4xl mb-4 font-bold">Grow Your Business</p>
            <p className="text-gray-300 mb-6 text-sm md:text-base w-[300px] md:w-[400px]">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.
            </p>
            <button className="bg-primary hover:bg-primaryHover text-white text-sm font-medium px-6 py-2 rounded">
              Let&apos;s work together
            </button>
          </div>
        </div>

     <div className="absolute bottom-0 left-0 right-0">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 150"  // Reduced height
    className="w-full h-16 md:h-24"  // Responsive height control
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
  )
}

export default Herosection