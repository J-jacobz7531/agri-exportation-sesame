import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Navbar } from "@/components/navbar";

const CoffeePage = () => {
  // Coffee Solutions data (currently unused)
  const solutions = [
    {
      title: "Premium Arabica",
      description:
        "High-altitude grown Arabica beans with complex flavor profiles and exceptional quality standards.",
      content: (
        <div className="relative h-full w-full">
          <Image
            src="/images/Coffee.jpeg"
            alt="Premium Arabica"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Sustainable Farming",
      description:
        "Environmentally conscious farming practices that support both quality and sustainability.",
      content: (
        <div className="relative h-full w-full">
          <Image
            src="/images/plantation.jpeg"
            alt="Sustainable Farming"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      title: "Global Export",
      description:
        "Complete export solutions with international quality standards and reliable logistics.",
      content: (
        <div className="relative h-full w-full">
          <Image
            src="/images/export.jpeg"
            alt="Global Export"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/Coffee.jpeg')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
            Premium Coffee
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 opacity-90">
            Sourced from the finest coffee estates worldwide, delivering exceptional quality and flavor
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-sm opacity-80">Coffee Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">25,000</div>
              <div className="text-sm opacity-80">Tons Exported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">$50M</div>
              <div className="text-sm opacity-80">Annual Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Our Coffee Mission
          </h2>
          <TextGenerateEffect
            words="We believe that the best coffee comes from empowering farmers as the main actors in sustainable farming practices, ensuring quality from bean to cup."
            // Add `flex`, `flex-wrap`, and `justify-center`
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed flex flex-wrap justify-center"
          />
        </div>
      </section>

      {/* Coffee Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Our Coffee Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Comprehensive coffee services from farm to export
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-600 to-amber-800 relative">
                <Image
                  src="/images/Coffee.jpeg"
                  alt="Premium Arabica"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Premium Grade
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Arabica</h3>
                <p className="text-gray-600 mb-4">High-altitude grown Arabica beans with complex flavor profiles and exceptional quality standards.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Grade AA, A, B available</li>
                  <li>• Screen size 15-19</li>
                  <li>• Moisture content ≤12.5%</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 relative">
                <Image
                  src="/images/plantation.jpeg"
                  alt="Sustainable Farming"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Sustainable
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable Farming</h3>
                <p className="text-gray-600 mb-4">Environmentally conscious farming practices that support both quality and sustainability.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Organic certification available</li>
                  <li>• Fair Trade practices</li>
                  <li>• Rainforest Alliance certified</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative">
                <Image
                  src="/images/export.jpeg"
                  alt="Global Export"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Export Ready
                </div>
                <h3 className="text-xl font-bold mb-2">Global Export</h3>
                <p className="text-gray-600 mb-4">Complete export solutions with international quality standards and reliable logistics.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Jute bags (60kg) packaging</li>
                  <li>• GrainPro protection</li>
                  <li>• Custom packaging available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cocoaPlantation.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Collaborate and Learn
          </h2>
          <p className="text-xl mb-8 opacity-90">
            From Industry Experts and Coffee Enthusiasts
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our network of coffee professionals, farmers, and exporters. 
            Share knowledge, best practices, and innovations in sustainable coffee production.
          </p>
          <button className="bg-white text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Join Our Network
          </button>
        </div>
      </section>

      {/* Coffee Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Discover Premium Coffee
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Coffee Specifications & Quality
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Bean Varieties</h4>
                  <p className="text-gray-600">Premium Arabica (Typica, Bourbon) and robust Robusta varieties sourced from optimal growing regions.</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Processing Methods</h4>
                  <p className="text-gray-600">Washed, Natural, and Honey processing methods to develop unique flavor profiles and characteristics.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Applications</h4>
                  <p className="text-gray-600">Perfect for espresso, filter coffee, specialty roasting, and instant coffee production.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Grade Standards</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>AA - Premium grade</li>
                  <li>A - High quality</li>
                  <li>B - Standard grade</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Quality Control</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Screen size: 15-19</li>
                  <li>Moisture: ≤12.5%</li>
                  <li>Defects: 0-8%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the Coffee Revolution Today!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us for premium coffee solutions and sustainable farming practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="relative text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Premium Coffee</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Products</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Arabica Beans</li>
                <li>Robusta Beans</li>
                <li>Specialty Coffee</li>
                <li>Instant Coffee</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quality</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Grade AA</li>
                <li>Organic Certified</li>
                <li>Fair Trade</li>
                <li>Rainforest Alliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Export Solutions</li>
                <li>Custom Packaging</li>
                <li>Quality Control</li>
                <li>Logistics Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Certifications</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>ISO 9001</li>
                <li>HACCP</li>
                <li>Organic</li>
                <li>Fair Trade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact Info</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Export Division</li>
                <li>Quality Assurance</li>
                <li>Customer Service</li>
                <li>Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoffeePage;
