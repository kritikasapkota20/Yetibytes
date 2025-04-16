import React from 'react';
import image from "../../assets/ourservicebg.svg";

const data = {
  director: {
    role: "Executive Director",
    name: "Sandesh Thapa",
    img: "https://plus.unsplash.com/premium_photo-1689607809844-dda6391f83b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
    size: "w-32 h-32"
  },
  members: [
    {
      role: "Team Leader",
      name: "Mr. Anonymous Person",
      img: "https://plus.unsplash.com/premium_photo-1736782965251-052e5b6bfe49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
      size: "w-24 h-24"
    },
    {
      role: "Programming",
      name: "Mr. Anonymous Person",
      img: "https://images.unsplash.com/photo-1736754079614-8b43bcba9926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fHw%3D",
      size: "w-24 h-24"
    },
    {
      role: "Design",
      name: "Ms. Anonymous Person",
      img: "https://images.unsplash.com/photo-1736703456290-cc5e909cff12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8fHw%3D",
      size: "w-24 h-24"
    },
    {
      role: "Marketing",
      name: "Ms. Anonymous Person",
      img: "https://images.unsplash.com/photo-1736762046814-678901a05bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fHw%3D",
      size: "w-24 h-24"
    }
  ]
};

const TeamSection = () => {
  return (
    <div 
      className="w-full relative py-16"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="w-full px-4">
        <div className="flex justify-center items-center text-3xl font-bold mb-16">
          <div className="text-black flex mr-2">OUR</div>
          <div className="text-primary">TEAM</div>
        </div>

        <div className=" hidden md:block absolute top-28 bottom-10 left-1/2 w-1 bg-gray-600 transform -translate-x-1/2 z-0"></div>

        <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-6xl px-4">
          <div className="md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
            <div className="bg-gray-200 rounded-full p-2 mb-4 flex justify-center items-center">
              <img
                src={data.director.img}
                alt={data.director.role}
                className="rounded-full w-56 h-56 object-cover"
              />
            </div>
            <div className="text-primary font-bold text-xl mt-2">{data.director.role}</div>
            <div className="text-gray-800 font-medium mt-1">{data.director.name}</div>
          </div>

          <div className="md:w-1/2 px-6">
            <div className="grid grid-cols-2 gap-4">
              {data.members.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="rounded-full p-1 mb-2">
                    <img
                      src={member.img}
                      alt={member.role}
                      className="rounded-full w-32 h-32 object-cover"
                    />
                  </div>
                  <div className="text-blue-600 font-medium text-center mt-1">{member.role}</div>
                  <div className="text-gray-800 text-sm text-center">{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
