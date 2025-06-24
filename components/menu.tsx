import { Card, CardContent } from "@/components/ui/card"

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-[#FFFAF5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of handcrafted coffee and delicious treats
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Fresh pastries and coffee"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <h3 className="text-white text-xl font-semibold p-4">Fresh Pastries</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Specialty coffee drinks"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <h3 className="text-white text-xl font-semibold p-4">Specialty Drinks</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Coffee beans"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <h3 className="text-white text-xl font-semibold p-4">Premium Beans</h3>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuCategory
            title="Espresso"
            items={[
              { name: "Espresso", price: "$3.50", description: "Rich and intense shot of pure coffee" },
              { name: "Americano", price: "$4.00", description: "Espresso diluted with hot water" },
              { name: "Cappuccino", price: "$4.50", description: "Equal parts espresso, steamed milk, and foam" },
              { name: "Latte", price: "$4.75", description: "Espresso with steamed milk and a light layer of foam" },
            ]}
          />

          <MenuCategory
            title="Specialty Drinks"
            items={[
              { name: "Mocha", price: "$5.25", description: "Espresso with chocolate and steamed milk" },
              {
                name: "Caramel Macchiato",
                price: "$5.50",
                description: "Vanilla, steamed milk, espresso, and caramel",
              },
              { name: "Flat White", price: "$4.75", description: "Espresso with velvety microfoam milk" },
              { name: "Affogato", price: "$5.75", description: "Espresso poured over a scoop of vanilla ice cream" },
            ]}
          />

          <MenuCategory
            title="Pastries & Snacks"
            items={[
              { name: "Croissant", price: "$3.50", description: "Buttery, flaky pastry" },
              { name: "Blueberry Muffin", price: "$3.75", description: "Moist muffin loaded with blueberries" },
              {
                name: "Avocado Toast",
                price: "$7.50",
                description: "Sourdough toast with avocado, sea salt, and red pepper flakes",
              },
              { name: "Chocolate Chip Cookie", price: "$2.75", description: "Freshly baked with premium chocolate" },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function MenuCategory({
  title,
  items,
}: {
  title: string
  items: { name: string; price: string; description: string }[]
}) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-[#2C1810] text-white py-3 px-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <li key={index} className="p-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#2C1810]">{item.name}</span>
                <span className="font-medium text-amber-600">{item.price}</span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
