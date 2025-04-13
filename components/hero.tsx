"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/bg.jpg"
          alt="Industrial health checkup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Trusted Health Checkups for 100+ Industries
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-8">Soleaf Energy & ESH Solutions</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Empowering Industrial Wellbeing through Expert Health Checkups. We provide comprehensive health and safety
            solutions for your workforce.
          </p>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
