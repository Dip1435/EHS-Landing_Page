"use client"

import type React from "react"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactFormEmailJS() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = "service_yhn3ufy"
    const templateId = "template_lgsnhik"
    const publicKey = "FOBGpGbkEJJsxJCuZ"

    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log("Email successfully sent!", result.text)
        setSubmitStatus("success")
        if (formRef.current) {
          formRef.current.reset()
        }
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text)
        setSubmitStatus("error")
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="title"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus === "success" && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            Failed to send message. Please try again or contact us directly.
          </div>
        )}
      </form>
    </div>
  )
}
