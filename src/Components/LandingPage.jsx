import React from 'react'
import yetibyteslogo from '../assets/yetibyteslogo.png'
import banner from '../assets/banner.png'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with curved bottom */}
      <section className="relative text-white pb-32 h-[736px] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0  "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${banner})`,

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
          <div className="max-w-3xl mx-aut px-4  md:pl-10 ">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Launch Your App</h1>
            <p className="text-2xl md:text-3xl mb-4 font-bold ">Grow Your Business</p>
            <p className="text-gray-300 mb-6 text-sm md:text-base  w-[300px] md:w-[400px]">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.
            </p>
            <button className="bg-primary hover:bg-primaryHover text-white text-sm font-medium px-6 py-2 rounded">
              Let&apos;s work together
            </button>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="w-full h-auto"
  >
    <path
      fill="#f0f8ff" // Use your background color here
      fillOpacity="1"
      d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</div>




      </section>

      {/* Areas of Expertise */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-blue-600 text-xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: 'Website Development', icon: '🌐' },
              { title: 'Application Development', icon: '📱' },
              { title: 'Digital Marketing', icon: '📊' },
              { title: 'Software Development', icon: '💻' },
              { title: 'UI/UX Design', icon: '🎨' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xs md:text-sm font-medium text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/project${item}/600/400`}
                  alt={`Project ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                  <p className="text-gray-600">
                    Brief description of the project and the technologies used in its development.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your digital goals and transform your business.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition duration-300">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={yetibyteslogo} alt="Yetibytes Logo" className="h-12 mb-4" />
              <p className="text-gray-400">
                Creating exceptional digital experiences for forward-thinking businesses.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">UI/UX Design</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Tech Street</li>
                <li>City, State 12345</li>
                <li>contact@yetibytes.com</li>
                <li>(123) 456-7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Yetibytes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage