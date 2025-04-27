"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2"
          >
            {/* <Leaf className="h-8 w-8 text-green-600" /> */}
            <Image
              src={"/logo/logo.png"}
              alt="logo"
              width={50}
              height={50}
              // className="h-8 w-8 rounded-full"
            />
            <span
              className={`font-bold  md:text-xl text-lg ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Soleaf Energy & ESH Solutions
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex space-x-8 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" hover:text-green-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#solar-services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("solar-services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Solar
            </a>
            <a
              href="#health-services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("health-services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Health
            </a>
            <a
              href="#industries"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("industries")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Industries
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-gray-700" : "text-white"
            } focus:outline-none`}
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className={`md:hidden pt-4 pb-2 space-y-3 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                toggleMenu();
              }}
              className="block hover:text-green-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
              className="block hover:text-green-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#solar-services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("solar-services")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
              className="block hover:text-green-600 font-medium transition-colors"
            >
              Solar
            </a>
            <a
              href="#health-services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("health-services")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
              className="block hover:text-green-600 font-medium transition-colors"
            >
              Health
            </a>
            <a
              href="#industries"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("industries")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
              className="block hover:text-green-600 font-medium transition-colors"
            >
              Industries
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
              className="block hover:text-green-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
