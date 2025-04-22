import React from 'react';

const CareerPage = () => {
  return (
    <div className=" w-full relative py-4">
      <div
        className="w-full h-[480px] padding bg-center bg-cover"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1745201779~exp=1745205379~hmac=f0a38c982e14d9642034357f5a729634cb7fc956a06f4a37ec682c56c244357a&w=1380')`,
        }}
      >
        <div className=" py-4 flex flex-col md:flex-row items-center h-full">
          <div className="w-full layout-padding px-4 md:w-1/2 text-center md:text-left py-4">
            <div className="text-primary font-semibold mb-2">- LIFE AT YETIBYTES</div>
            <div className="text-4xl  text-black  mb-4">
              Bring your spark,<br />
              we'll fuel the fire.
            </div>
            <div className="text-gray-500 mb-6 max-w-lg">
              At YetiBytes, we believe that great things happen when passion meets opportunity. Whether you're just starting out or looking to take your career to the next level, we provide the tools, mentorship, and environment to help you thrive. Come as you are—and let's build something extraordinary together.
            </div>
            <button className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
              Explore open roles
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center  md:justify-items-end pt-[400px] py-4">
            <div className="rounded-se-[70px] rounded-es-[70px] overflow-hidden shadow-lg w-56 h-64">
              <img
                src="https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg"
                alt="Team members working together"
                className="w-full h-full object-cover"
              />
        </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CareerPage;
