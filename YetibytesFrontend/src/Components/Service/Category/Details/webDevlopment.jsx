import React from 'react';

const Web = () => {
  const itemsLeft = [
    { title: 'Our Mission', description: 'Business partnership is one of the best ways to expand your business' },
    { title: 'Our Vision', description: 'Business partnership is one of the best ways to expand your business' },
    { title: 'Creative Minds', description: 'Business partnership is one of the best ways to expand your business' },
  ];

  const itemsRight = [
    { title: 'Business Collaboration', description: 'Business partnership is one of the best ways to expand your business' },
    { title: 'Business Collaboration', description: 'Business partnership is one of the best ways to expand your business' },
    { title: 'Reliable Partnership', description: 'Business partnership is one of the best ways to expand your business' },
  ];

  return (
    <div className="bg-blue-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Built For You, With You</h2>
        <p className="mt-4 text-gray-600">Yetibytes is the ultimate destination for tailored solutions that perfectly meet your business needs.</p>
      </div>
      <div className="flex justify-center items-center space-x-8">
        <div className="space-y-8">
          {itemsLeft.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white border border-gray-200 shadow-md flex items-center justify-center rounded-full">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <img src="/path-to-icon.png" alt={item.title} className="w-8 h-8 " />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-40 h-40 bg-white border border-gray-200 shadow-md flex items-center justify-center rounded-full">
          <h3 className="text-lg font-medium text-blue-700">Why Choose Us</h3>
        </div>

        <div className="space-y-8">
          {itemsRight.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="w-20 h-20 bg-white border border-gray-200 shadow-md flex items-center justify-center rounded-full">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <img src="/path-to-icon.png" alt={item.title} className="w-8 h-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web;