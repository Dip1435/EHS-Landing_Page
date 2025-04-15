"use client";

import { Stethoscope, FileText, Shield, HeartPulse } from "lucide-react";
import { useRef } from "react";

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-green-600" />,
      title: "Industrial Employee Health Checkup",
      description:
        "Comprehensive health assessments tailored to industry-specific requirements, ensuring your workforce remains healthy and productive.",
    },
    {
      icon: <FileText className="h-12 w-12 text-green-600" />,
      title: "On-site Medical Reports",
      description:
        "Detailed medical reports delivered on-site, providing immediate insights and recommendations for employee health management.",
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Environmental & Safety Evaluations",
      description:
        "Thorough assessment of workplace environments to identify potential health hazards and safety concerns.",
    },
    {
      icon: <HeartPulse className="h-12 w-12 text-green-600" />,
      title: "Consultancy & Reporting",
      description:
        "Expert consultancy services and detailed reporting to help implement effective health and safety protocols in your industry.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="health-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Health & Safety Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive health and safety solutions tailored to the
            unique needs of your industry.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-6 pt-2 px-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-[85%] snap-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Request Health Service
          </a>
        </div>
      </div>
    </section>
  );
}
