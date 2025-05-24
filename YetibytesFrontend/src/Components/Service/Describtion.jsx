import React from "react";
import PropTypes from "prop-types";
import Digitalmarketing from "../../assets/digitalmarketingicon.svg"
import image from "../../assets/webdevlopment.svg";

const Description = ({ selectCategory }) => {
    const data = {
        "Web Development": {
            heading: "Website Development",
            description:
                "Seti Global Tech is Nepal’s leading web development company, known for delivering custom web solutions that fuel business growth. We specialize in designing and developing high-quality websites and web applications that stand out in today's digital world.",
            highlights: [
                {
                    title: "Get Effective Consultancy",
                    detail: "A well laid out process spanning the entire development life cycle.",
                },
                {
                    title: "Get Eye Catching Content",
                    detail: "Efficient use of client side scripting for enhanced user interactivity.",
                },
            ],
            image: image,
        },
        "Mobile App Development": {
            heading: "Mobile App Development",
            description:
                "We build feature-rich mobile applications tailored to your business needs, delivering seamless experiences across Android and iOS platforms with modern design and efficient performance.",
            highlights: [
                {
                    title: "Cross-Platform Solutions",
                    detail: "Build once, deploy anywhere with React Native and Flutter.",
                },
                {
                    title: "Optimized Performance",
                    detail: "Apps optimized for speed, reliability, and user engagement.",
                },
            ],
            image: "https://cdn.pixabay.com/photo/2017/12/05/05/34/merry-christmas-2998593_1280.jpg",
        },
        "Digital Marketing": {
            heading: "Digital Marketing",
            description:
                "Boost your brand’s online presence with our comprehensive digital marketing strategies. From SEO and PPC to social media management, we help you connect with your audience.",
            highlights: [
                {
                    title: "SEO & Analytics",
                    detail: "Drive traffic and track performance with real-time analytics.",
                },
                {
                    title: "Social Media Growth",
                    detail: "Engage users and grow your brand across social platforms.",
                },
            ],
            image:Digitalmarketing,
        },
        "Software Development": {
            heading: "Software Development",
            description:
                "We deliver robust software solutions tailored for startups to enterprises. Whether it’s automation, ERP, or CRM tools, we ensure scalable and secure systems.",
            highlights: [
                {
                    title: "Custom-Built Systems",
                    detail: "Software designed specifically around your business logic.",
                },
                {
                    title: "Enterprise Ready",
                    detail: "Secure, scalable, and maintainable software solutions.",
                },
            ],
            image: "https://cdn.pixabay.com/photo/2024/03/08/16/06/building-8621170_1280.jpg",
        },
        "UI/UX Design": {
            heading: "UI/UX Design",
            description:
                "Create intuitive and aesthetically pleasing designs with our UI/UX experts. We focus on usability, functionality, and the complete user journey.",
            highlights: [
                {
                    title: "User-Centered Design",
                    detail: "Designs backed by research and focused on user experience.",
                },
                {
                    title: "Prototyping & Testing",
                    detail: "Interactive prototypes with real-user testing and feedback.",
                },
            ],
            image: "https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_1280.jpg",
        },
    };

    const category = data[selectCategory] || data["Web Development"];

    return (
        <div className="w-full flex flex-col md:flex-row gap-8 px-2 md:px-8 md:px-16 py-8 md:py-8 bg-transparent rounded-lg">
            <div className="flex-1 flex flex-col justify-center">
            {/* <div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 py-8 bg-white rounded-lg shadow-md"> */}
  {/* <div className="flex-1 flex flex-col justify-center"> */}
                <div className="text-2xl md:text-3xl text-primary py-2">{category.heading}</div>
                <div className="text-gray-500 text-base md:text-lg mb-2">{category.description}</div>
                <div>
                    {category.highlights.map((item, index) => (
                        <div key={index} className="py-4">
                            <div className="text-primary py-2"> ✔ {item.title}</div>
                            <div className="text-gray-500">
                                {item.detail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                  <div className="flex-1 flex items-center justify-center">
                <img
                    src={category.image}
                    alt={category.heading}
                    className="rounded-md  h-[350px] w-full"
                    //    className="rounded-md w-full max-w-[500px] h-auto object-contain"
                />
            </div>
        </div>
    );
};
Description.propTypes = {
    selectCategory: PropTypes.string
};


export default Description;
