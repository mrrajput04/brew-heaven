import type React from "react"
import { Coffee, Clock, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, Brew Haven has been serving the community with the finest coffee sourced from ethical
              farms around the world. Our passion for quality coffee and warm hospitality has made us a beloved
              destination for coffee enthusiasts.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe in creating a space where people can connect, work, or simply enjoy a moment of tranquility
              with a perfect cup of coffee. Our baristas are trained to craft each beverage with precision and care.
            </p>
            <p className="text-lg text-gray-700">
              From our signature espresso blends to our seasonal specialties, every item on our menu is crafted with
              attention to detail and a commitment to excellence.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Coffee shop interior with warm lighting and comfortable seating"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Coffee className="w-10 h-10 text-amber-600" />}
                title="Premium Beans"
                description="Ethically sourced beans from around the world, roasted to perfection."
              />
              <FeatureCard
                icon={<Clock className="w-10 h-10 text-amber-600" />}
                title="Fresh Brews"
                description="Every cup is freshly brewed to ensure maximum flavor and aroma."
              />
              <FeatureCard
                icon={<Award className="w-10 h-10 text-amber-600" />}
                title="Award Winning"
                description="Recognized for excellence in coffee quality and service."
              />
              <FeatureCard
                icon={<Coffee className="w-10 h-10 text-amber-600" />}
                title="Skilled Baristas"
                description="Our team is passionate about the art and science of coffee."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-[#FFFAF5] p-6 rounded-lg shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#2C1810] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
