"use client";

import {
  Factory,
  Building,
  Truck,
  HardHat,
  Droplet,
  Hammer,
  Wrench,
  Cpu,
} from "lucide-react";
import { useRef } from "react";

export default function Industries() {

  const carouselRef = useRef<HTMLDivElement>(null)

  const industryCategories = [
    {
      icon: <Droplet className="h-10 w-10 text-green-600" />,
      name: "Pharmaceuticals",
      examples: [
        "API Manufacturing",
        "Formulations",
        "Biotech",
        "Healthcare Products",
      ],
    },
    {
      icon: <Droplet className="h-10 w-10 text-green-600" />,
      name: "Chemical",
      examples: [
        "Petrochemicals",
        "Pharmaceuticals",
        "Agrochemicals",
        "Polymers",
      ],
    },
    {
      icon: <Hammer className="h-10 w-10 text-green-600" />,
      name: "Metal Working",
      examples: ["Foundries", "Forging", "Welding", "Machining"],
    },
    {
      icon: <Factory className="h-10 w-10 text-green-600" />,
      name: "Manufacturing",
      examples: ["Automotive", "Electronics", "Textiles", "Food Processing"],
    },
    {
      icon: <Building className="h-10 w-10 text-green-600" />,
      name: "Construction",
      examples: [
        "Residential",
        "Commercial",
        "Infrastructure",
        "Heavy Engineering",
      ],
    },
    {
      icon: <Truck className="h-10 w-10 text-green-600" />,
      name: "Logistics",
      examples: [
        "Warehousing",
        "Transportation",
        "Supply Chain",
        "Distribution",
      ],
    },
    {
      icon: <Wrench className="h-10 w-10 text-green-600" />,
      name: "Utilities",
      examples: [
        "Power Generation",
        "Water Treatment",
        "Waste Management",
        "Gas",
      ],
    },
    {
      icon: <Cpu className="h-10 w-10 text-green-600" />,
      name: "Technology",
      examples: [
        "Data Centers",
        "Electronics Manufacturing",
        "Telecommunications",
        "R&D Facilities",
      ],
    },
  ];

  return (
    <section className="py-16" id="industries">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide solar energy and health & safety solutions to over 100 industries across various sectors.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{category.name}</h3>
              <ul className="text-gray-600 space-y-1">
                {category.examples.map((example, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-600">•</span>
                    {example}
                  </li>
                ))}
              </ul>
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
            {industryCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-[85%] snap-center">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.name}</h3>
                <ul className="text-gray-600 space-y-1">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-green-600">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your industry? We serve many more! Contact us to learn how we can help.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
