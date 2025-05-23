import React, { useState } from "react";

const ContactForm = () => {
  const countryCodes = [
    { label: "🇳🇵 NP +977", value: "+977" },
    { label: "🇮🇳 IN +91", value: "+91" },
    { label: "🇺🇸 US +1", value: "+1" },
    { label: "🇬🇧 UK +44", value: "+44" },
    { label: "🇦🇺 AU +61", value: "+61" },
  ];

  const [selectedCode, setSelectedCode] = useState("+977");
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative py-16 ">
      <div className=" bg-white rounded-2xl shadow-2xl  flex flex-col md:flex-row">
        <div className="bg-gray-100 p-8 md:w-1/3 rounded-2xl shadow-2xl">
          <div className="mb-8">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              height="60"
            >
              <path
                d="M50 10C25.1 10 5 26.1 5 46c0 10.9 6.5 20.7 16.5 27.4C20.8 78.2 14 89 14 89c0 0 12.1-4.1 22.7-7.9C40.6 82.3 45.2 83 50 83c24.9 0 45-16.1 45-37S74.9 10 50 10z"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <circle cx="35" cy="46" r="5" fill="#1DBFC1" />
              <circle cx="50" cy="46" r="5" fill="#1DBFC1" />
              <circle cx="65" cy="46" r="5" fill="#1DBFC1" />
            </svg>
            <div className="text-2xl font-bold text-primary py-4">
              Get In Touch
            </div>
            <div className="text-gray-500 mt-2">
              YetiBytes is ready to provide the right solution according to your
              needs
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Head Office</div>
                <div className="text-gray-500 text-sm">
                  Maitidevi, Kathmandu Nepal
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Email Us</div>
                <div className="text-gray-500 text-sm">yetibytes@gmail.com</div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Call Us</div>
                <div className="text-gray-500 text-sm">
                  Phone: +977 9861113353
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 border-t border-blue-400"></div>

          <div>
            <div className="font-semibold text-gray-500 mb-4">Our Socials</div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Raibarpress"
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 md:w-2/3 rounded-md shadow-md">
          <div className="mb-8">
            <div className="text-3xl font-bold text-primary">
              Let's level up your
              <div className="py-2">brand, together</div>
            </div>
            <div className="text-gray-500 mt-2">
              You can reach us anytime via{" "}
              <a href="mailto:yetibytes@gmail.com" className="text-primary">
                yetibytes@gmail.com
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Phone number
              </label>
              <div className="flex">
                <select
                  value={selectedCode}
                  onChange={(e) => setSelectedCode(e.target.value)}
                  className="bg-gray-50 text-gray-600 border border-gray-300 rounded-l-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {countryCodes.map((code) => (
                    <option key={code.value} value={code.value}>
                      {code.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="9867071179"
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                How can we help?
              </label>
              <textarea
                rows="4"
                placeholder="Tell us a little about the project..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
