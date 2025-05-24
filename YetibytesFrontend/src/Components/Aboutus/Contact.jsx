import React, { useState } from 'react';

const Contact = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);


  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  

  

  const data = [
    {
      question: "What is Affiliate Program in Nepal by Yetibytes?",
      answer: "Our affiliate program allows you to earn commission by promoting Yetibytes services. You'll receive a unique tracking link and earn a percentage of sales made through your referrals."
    },
    {
      question: "Where can I promote Yetibytes?",
      answer: "You can promote Yetibytes on your website, blog, social media channels, email newsletters, or any other platform where you have an audience interested in web development services."
    },
    {
      question: "Where can I find the Templates & Resources to keep them on my Website?",
      answer: "All affiliate templates and promotional resources are available in your affiliate dashboard after signing up. You'll find banners, text links, and other marketing materials to use on your website."
    },
    {
      question: "For how much time the Customer is taken as my affiliate if he clicks on my link?",
      answer: "When someone clicks your affiliate link, they are tracked as your referral for 30 days. Any purchase they make within that period will be attributed to your affiliate account."
    },
    {
      question: "Where can I promote Yetibytes?",
      answer: "You can promote Yetibytes through your website, blog, social media platforms, email marketing, or any digital channel where your audience might be interested in web development services."
    },
    {
      question: "For how much time the Customer is taken as my affiliate if he clicks on my link?",
      answer: "Customers who click on your affiliate link will be tracked for 30 days. Any purchase they make within this period will count toward your commission."
    }
  ];

  return (
    <div className=" max-w-7xl mx-auto py-12 px-4 md:px-8 ">
      <div className="">
        <h1 className="text-3xl font-bold text-primary text-center mb-12">Get In Touch</h1>
        
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-xl font-semibold text-primary mb-6">Send us your feedback</h2>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-500">+977 9841000001</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-500">yetibytes@gmail.com</span>
              </div>
            </div>
            
            <form>
              <div className="mb-4 gap-4">
                <label htmlFor="name" className="block text-sm text-gray-500 mb-1">Name</label>
                <input
                  type="text"
                  
                  
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  
                  
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">Phone number</label>
                <input
                  type="tel"
                  
                  placeholder="+977 9867077717"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-500 mb-1">How can we help?</label>
                <textarea
                  
                  rows="4"
                  placeholder="Tell us a little about the project..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Get started
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 bg-primary p-8">
            <h2 className="text-xl font-semibold text-white mb-6">frequently asked questions</h2>
            
            <div className="space-y-2">
              {data.map((faq, index) => (
                <div key={index} className="border-b border-primary last:border-b-0">
                  <button
                    className="flex justify-between items-center w-full py-4 text-left text-white font-medium hover:text-blue-200 transition-colors"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${activeQuestion === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeQuestion === index && (
                    <div className="pb-4 text-blue-100 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-white text-sm mb-3">My question is not here.</div>
              <button className="bg-white hover:bg-gray-100 text-primary font-medium py-2 px-6 rounded-md inline-flex items-center transition duration-300">
                CONTACT US
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;