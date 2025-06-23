import type React from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#FFFAF5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to see you in person. Drop by for a coffee or get in touch.
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#2C1810] mb-6">Contact Information</h3>

            <div className="space-y-6">
              <ContactItem
                icon={<MapPin className="w-5 h-5 text-amber-600" />}
                title="Address"
                content="123 Coffee Street, Brewville, CA 94123"
              />

              <ContactItem icon={<Phone className="w-5 h-5 text-amber-600" />} title="Phone" content="(555) 123-4567" />

              <ContactItem
                icon={<Mail className="w-5 h-5 text-amber-600" />}
                title="Email"
                content="hello@brewhaven.com"
              />

              <div>
                <h4 className="text-lg font-medium text-[#2C1810] mb-3 flex items-center">
                  <Clock className="w-5 h-5 text-amber-600 mr-3" />
                  Hours of Operation
                </h4>
                <div className="ml-8 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">8:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] md:h-auto rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map in production */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2C1810] mb-2">Brew Haven</h3>
                <p className="text-gray-600">
                  123 Coffee Street
                  <br />
                  Brewville, CA 94123
                </p>
                <p className="mt-4 text-sm text-gray-500">Map would be displayed here in production</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: string
}) {
  return (
    <div>
      <h4 className="text-lg font-medium text-[#2C1810] mb-1 flex items-center">
        <span className="mr-3">{icon}</span>
        {title}
      </h4>
      <p className="text-gray-600 ml-8">{content}</p>
    </div>
  )
}
