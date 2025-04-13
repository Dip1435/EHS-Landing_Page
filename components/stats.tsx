import { Users, CheckCircle, Award } from "lucide-react"

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">100+</h3>
            <p className="text-gray-600">Industries Covered</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">12,500+</h3>
            <p className="text-gray-600">Employees Checked</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">5-7</h3>
            <p className="text-gray-600">Expert Professionals</p>
          </div>
        </div>
      </div>
    </section>
  )
}
