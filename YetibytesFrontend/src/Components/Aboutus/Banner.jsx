import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-6xl flex justify-center py-6  mx-auto ">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl w-full">
        <div className="grid grid-cols-2 md:w-2/5">
          <img
            src="https://images.pexels.com/photos/11813108/pexels-photo-11813108.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="App Design"
            className="h-full w-44 object-cover rounded-s-md py-10"
          />
          <img
            src="https://images.pexels.com/photos/31559100/pexels-photo-31559100/free-photo-of-floral-pattern-wooden-tags-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Developer"
            className="h-42 w-44 object-cover rounded-e-md shadow-md"
          />
          <img
            src="https://images.pexels.com/photos/31559100/pexels-photo-31559100/free-photo-of-floral-pattern-wooden-tags-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Analytics"
            className="h-42 w-44 object-cover rounded-s-md shadow-md"
          />
          <img
            src="https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Code on screen"
            className="h-full w-44 object-cover rounded-e-md py-10"
          />
        </div>

        <div className="md:w-3/5 py-">
          <div className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-snug">
            We are a full-service digital<br className="hidden md:block" /> solutions company.
          </div>
          <div className="text-gray-500 mb-4 leading-relaxed text-justify hyphens-auto">
            Yetibytes is the best web development company in Nepal, which specializes in building
            custom web solutions that promote business success. Being a top Web app development
            company in Nepal, we concentrate on producing creative, excellent websites and web apps.
            With the newest technologies, such as LAMP and MEAN, our skilled team at this top web
            design company in Nepal can turn your concepts into distinctive digital experiences. You
            can rely on Yetibytes to provide tailored, outcome-driven solutions for your company needs
            if you're looking for top-notch web design in Nepal.
          </div>
          <div className="text-gray-500 mb-4 leading-relaxed">
            As a trusted website development company in Nepal, we're proficient in cutting-edge
            technologies like LAMP and MEAN, excelling in all aspects of web development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
