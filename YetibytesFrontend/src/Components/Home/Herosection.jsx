import React from 'react'
import yetibyteslogo from '../../assets/yetibyteslogo.png'
import banner from '../../assets/Banner.png'

const Herosection = () => {
  return (
    <div className="min-h-screen bg-[#edf7ff]">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Launch Your App</h1>
            <p className="text-2xl md:text-3xl mb-4 font-bold">Grow Your Business</p>
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
    viewBox="0 0 1440 320"
    className="w-full h-auto"
  >
    <path
      fill="#ffffff" // Use your background color here
      fillOpacity="1"
      d="M0,160L48,165.3C96,171,180,181,288,176C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</div>
      </section>
    </div>
  )
}

export default Herosection
