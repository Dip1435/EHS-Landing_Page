"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import ContactFormEmailJS from "./contact-form-emailjs"

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to learn more about our services or to schedule a consultation.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactFormEmailJS />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 9426369944</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@soleafenergy.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    New Ranip,
                    <br />
                    Ahmedabad-382470
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
