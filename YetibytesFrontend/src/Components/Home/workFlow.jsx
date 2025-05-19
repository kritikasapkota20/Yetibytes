import React from "react";
import vector from "../../assets/Vector 374.svg";
import Discover from "../../assets/image1.svg";
import Strategize from "../../assets/image2.svg";
import Design from "../../assets/image3.svg";
import Develop from "../../assets/image4.svg";
import ProductLaunch from "../../assets/image5.svg";
import Support from "../../assets/image6.svg";

const Workflow = () => {
  const workflowSteps = [
    {
      id: 1,
      title: "Discover",
      description:
        'Our first priority is understanding you—your goals, your challenges, and your audience. We dive deep into your business to uncover the "why" behind your project, ensuring we build solutions that align with your vision from the start.',
      img: Discover,
      iconColor: "bg-primary",
    },
    {
      id: 2,
      title: "Strategize",
      description:
        "With a clear understanding of your needs, we create a roadmap. From tech stacks to timelines, we lay out everything in a structured, transparent way so you know exactly what to expect, when, and how.",
      img: Strategize,
      iconColor: "bg-primary",
    },
    {
      id: 3,
      title: "Design",
      description:
        "Our design team crafts user experiences that feel natural and look stunning. Whether it's a sleek mobile app or a dynamic web platform, every screen is tailored to offer clarity and engagement for your users.",
      img: Design,
      iconColor: "bg-primary",
    },
    {
      id: 4,
      title: "Develop",
      description:
        "Our developers build robust, scalable software using the latest technologies. Throughout the process, we conduct rigorous testing to ensure your product works seamlessly across devices and platforms.",
      img: Develop,
      iconColor: "bg-primary",
    },
    {
      id: 5,
      title: "Product Launch",
      description:
        "Once your product is polished and tested, we launch it with confidence. Whether it's a live deployment or app store submission, we handle the technical details and ensure a smooth transition from development to delivery.",
      img: ProductLaunch,
      iconColor: "bg-primary",
    },
    {
      id: 6,
      title: "Support",
      description:
        "After launch, we offer ongoing support, maintenance, and upgrades. As your needs grow and the digital landscape changes, we're here to help you evolve and stay ahead.",
      img: Support,
      iconColor: "bg-primary",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px- py-16 relative">
      <div className="text-center mb-20">
        <div className="text-xl font-bold text-primary mb-2">
          HOW WE WORK
        </div>
        <div className="text-headingMedium text-secondary font-semibold ">
          Our process, built for clarity and flow.
        </div>
      </div>

      <div className="hidden md:block absolute top-28 bottom-10 mt-10 left-1/2 w-1 bg-primary transform -translate-x-1/2 z-0"></div>

      {workflowSteps.map((step, index) => {
        const isEven = index % 2 === 1;

        return (
          <div key={step.id}>
            <div
              className={`relative z-10 mb-1 flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >

              <div className="w-full md:w-1/2 md:mb-0 flex justify-evenly">
                <img
                  src={step.img}
                  className="w-48 h-48 object-contain"
                />
              </div>

              <div className="w-full md:w-1/2 md:px-6 relative">
                <div className= {`absolute px-20 top-[-24px] z-10 ${
      isEven ? "right-0" : "left-0"
    }`}>
                  <div
                    className={`${step.iconColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md`}
                  >
                    {step.id}
                  </div>
                </div>

                <div className=" text-right p-6 ">
                  <div className={`px-6 py-3 ${isEven ? "text-right" : "text-left"} font-bold text-lg`}>
                    {step.title}
                  </div>
                  <div className="text-paragraphMedium text-justify [hyphens:auto] px-6">{step.description}</div>
                </div>
              </div>
            </div>

            {index < workflowSteps.length - 1 && (
              <div className="h-20 flex justify-center relative">
                <img
                  src={vector}
                  alt="Connecting dashed line"
                  className="h-full"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Workflow;