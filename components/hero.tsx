"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/bg.jpg"
          alt="Soleaf Energy & ESH Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Solar Energy & Health Solutions
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-8">Soleaf Energy & ESH Solutions</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Powering a sustainable future with renewable solar energy and empowering industrial wellbeing through expert
            health checkups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#solar-services"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("solar-services")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 text-center"
            >
              Solar Solutions
            </a>
            <a
              href="#health-services"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("health-services")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-block bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-md transition-colors duration-300 text-center"
            >
              Health Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
