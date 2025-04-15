"use client";

import {
  Sun,
  Home,
  Building2,
  Factory,
  Battery,
  Zap,
  LineChart,
  Leaf,
} from "lucide-react";
import { useRef } from "react";

export default function SolarServices() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Home className="h-12 w-12 text-green-600" />,
      title: "Residential Solar",
      description:
        "Custom solar solutions for homes, reducing electricity bills and carbon footprint with clean, renewable energy.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-green-600" />,
      title: "Commercial Solar",
      description:
        "Scalable solar installations for businesses, providing energy independence and significant cost savings.",
    },
    {
      icon: <Factory className="h-12 w-12 text-green-600" />,
      title: "Industrial Solar",
      description:
        "High-capacity solar systems for industrial facilities, designed to meet large-scale energy demands.",
    },
    {
      icon: <Battery className="h-12 w-12 text-green-600" />,
      title: "Solar Storage",
      description:
        "Advanced battery solutions to store excess solar energy, ensuring power availability even after sunset.",
    },
    {
      icon: <Zap className="h-12 w-12 text-green-600" />,
      title: "Solar Maintenance",
      description:
        "Professional maintenance services to ensure optimal performance and longevity of your solar installation.",
    },
    {
      icon: <LineChart className="h-12 w-12 text-green-600" />,
      title: "Energy Consulting",
      description:
        "Expert analysis and recommendations to maximize energy efficiency and ROI for your solar investment.",
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Green Energy Solutions",
      description:
        "Comprehensive renewable energy solutions beyond solar, tailored to your specific sustainability goals.",
    },
    {
      icon: <Sun className="h-12 w-12 text-green-600" />,
      title: "Solar Design & Installation",
      description:
        "End-to-end solar system design and professional installation services by certified technicians.",
    },
  ];

  return (
    <section className="py-16" id="solar-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Solar Energy Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Harnessing the power of the sun to provide sustainable,
            cost-effective energy solutions for homes, businesses, and
            industries.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
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
            Get Solar Quote
          </a>
        </div>
      </div>
    </section>
  );
}
