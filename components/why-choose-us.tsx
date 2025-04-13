import { Shield, CheckCircle, Users } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Trust</h3>
            <p className="text-gray-600">
              Trusted by over 100 industries for comprehensive health checkups and safety solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Accuracy</h3>
            <p className="text-gray-600">Precise health assessments and detailed reports with actionable insights.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Team</h3>
            <p className="text-gray-600">
              Experienced healthcare professionals specialized in industrial health and safety.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">About Soleaf Energy & ESH Solutions</h3>
            <p className="text-gray-600 mb-4">
              Soleaf Energy & ESH Solutions is a leading provider of industrial health checkups and environmental safety
              solutions. With years of experience serving diverse industries, we've built a reputation for excellence in
              promoting workplace health and safety.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to empower industrial wellbeing through expert health checkups and comprehensive safety
              assessments. We believe that a healthy workforce is the foundation of a productive and sustainable
              business.
            </p>
            <p className="text-gray-600">
              Our team of 5-7 expert professionals brings together diverse skills in occupational health, environmental
              safety, and industrial hygiene to provide holistic solutions tailored to your specific industry needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
