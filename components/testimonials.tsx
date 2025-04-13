import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Paresh patel",
      company: "Accumax Lab Devices",
      quote:
        "Soleaf Energy has transformed our approach to employee health. Their comprehensive checkups have reduced sick days by 30% and improved overall workplace wellness.",
      rating: 5,
    },
    {
      name: "Ramesh Goel",
      company: "BPCL",
      quote:
        "The team at Soleaf is professional, thorough, and efficient. Their on-site medical reports have been invaluable for our safety compliance and employee health management.",
      rating: 5,
    },
    {
      name: "Mohit Parekh",
      company: "Nexcure Healthcare.",
      quote:
        "We've been working with Soleaf for over 3 years now. Their environmental safety evaluations have helped us identify and address potential hazards before they become problems.",
      rating: 4,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the industries we've helped improve their health and safety standards.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-green-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Our Impact</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-green-600 mb-2">30%</h4>
              <p className="text-gray-600">Average reduction in workplace incidents</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-green-600 mb-2">25%</h4>
              <p className="text-gray-600">Decrease in employee sick days</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-green-600 mb-2">95%</h4>
              <p className="text-gray-600">Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
