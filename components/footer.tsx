"use client"
import { Leaf, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="font-bold text-xl">Soleaf Energy And EHS Solution</span>
            </div>
            <p className="text-gray-300 mb-4">Empowering Industrial Wellbeing through Expert Health Checkups</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Health Checkups
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Medical Reports
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Safety Evaluations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Consultancy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Training Programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>New Ranip,</p>
              <p>Ahmedabad-382470</p>
              <p>Phone: +91 9426369944</p>
              <p>Email: info@soleafenergy.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Soleaf Energy & ESH Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
