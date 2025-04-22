import React from 'react';
import Contant from "./ContactForm"

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 relative">
      <div
        className="absolute top-0 left-0 w-full h-[480px] bg-center bg-cover z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center pt-[200px] px-4 text-white text-center">
        <div className="text-4xl font-bold">Contact Us</div>
        <div className="mt-2 text-lg max-w-xl">
          YetiBytes is ready to provide the right solution according to your needs.
        </div>
      </div>
      <Contant/>

    </div>
  );
};

export default Index;
