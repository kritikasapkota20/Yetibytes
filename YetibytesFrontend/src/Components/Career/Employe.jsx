import React from "react";

const Employee = () => {
  return (
    <div className="w-full  py-6 flex flex-col items-center">
      <div
        className="w-full max-w-5xl mx-auto bg-center bg-cover py-4 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1745201779~exp=1745205379~hmac=f0a38c982e14d9642034357f5a729634cb7fc956a06f4a37ec682c56c244357a&w=1380')`,
        }}
      >
        <div className="w-full h-[200px] px-4 md:flex items-center justify-between">
          <div className="md:w-2/3">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mt-4">
              -EMPLOYEE SPOTLIGHT
            </p>
            <h2 className="text-3xl font-bold text-gray-500 mb-2">
              Meet Pranav Thapa
            </h2>
            <p className="text-gray-500 mb-4">Junior Backend Developer</p>

            <blockquote className="text-gray-700 pl-4 py-2 mb-4 italic">
              "Working on the backend team challenges me to create an incredible
              learning curve. I collaborate closely with senior developers to
              build scalable APIs and ensure our systems run smoothly behind the
              scenes—while always keeping performance and user experience in
              mind."
            </blockquote>
          </div>

          <div className=" w-full px-4 md:w-1/3 mt-28 rounded-2xl">
            <div className="rounded-se-3xl rounded-es-3xl rounded-s-3xl shadow-md overflow-hidden w-44 h-full ">
              <img
                src="https://www.headshotpro.com/avatar-results/danny-2.webp"
                alt="Pranav Thapa wearing a black jacket in a snowy mountain setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full max-w-4xl flex items-center justify-center mt-4 py-3">
        {/* Previous Button */}
        <button className="p-2 rounded-full hover:bg-gray-200 mr-4 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="5,12 19,3 19,21" fill="#1E40AF" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>

        {/* Next Button */}
        <button className="p-2 rounded-full hover:bg-gray-200 ml-4 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="19,12 5,21 5,3" fill="#1E40AF" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Employee;
