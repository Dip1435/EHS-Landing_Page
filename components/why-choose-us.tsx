"use client";

import { Shield, Sun, Award } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Trust</h3>
            <p className="text-gray-600">
              Trusted by over 100 industries for comprehensive health checkups,
              safety solutions, and solar energy installations.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sun className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-600">
              Committed to creating a sustainable future through renewable
              energy solutions and healthier workplaces.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Expertise</h3>
            <p className="text-gray-600">
              Team of certified professionals specialized in both solar energy
              technology and industrial health and safety.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              About Soleaf Energy & ESH Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Soleaf Energy & ESH Solutions is a leading provider of dual
              services: solar energy solutions and industrial health checkups.
              With years of experience serving diverse industries, we've built a
              reputation for excellence in promoting workplace health, safety,
              and sustainable energy practices.
            </p>
            <p className="text-gray-600 mb-4">
              Our solar energy division specializes in designing, installing,
              and maintaining solar power systems for residential, commercial,
              and industrial clients. We help reduce energy costs while
              contributing to a cleaner environment.
            </p>
            <p className="text-gray-600 mb-4">
              Our ESH (Environmental, Safety & Health) division focuses on
              comprehensive health checkups and safety assessments for
              industrial workforces. We believe that a healthy workforce in an
              environmentally conscious workplace is the foundation of a
              productive and sustainable business.
            </p>
            <p className="text-gray-600">
              Our team of expert professionals brings together diverse skills in
              renewable energy, occupational health, environmental safety, and
              industrial hygiene to provide holistic solutions tailored to your
              specific industry needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
