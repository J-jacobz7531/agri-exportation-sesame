import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Navbar } from "@/components/navbar";

const VanillaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/vanilla.jpg')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
            Premium Vanilla
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 opacity-90">
            Hand-pollinated and traditionally cured vanilla beans with exceptional aroma and flavor
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">20+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">2.4%</div>
              <div className="text-sm opacity-80">Max Vanillin Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">Grade A</div>
              <div className="text-sm opacity-80">Premium Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">15cm+</div>
              <div className="text-sm opacity-80">Bean Length</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Our Vanilla Mission
          </h2>
          <TextGenerateEffect
            words="We believe that the finest vanilla comes from traditional hand-pollination and meticulous curing processes, ensuring exceptional quality from pod to palate."
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed"
          />
        </div>
      </section>

      {/* Vanilla Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Our Vanilla Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Premium vanilla beans from cultivation to export
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-600 to-amber-800 relative">
                <Image
                  src="/images/vanilla.jpg"
                  alt="Premium Vanilla Beans"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Grade A Premium
                </div>
                <h3 className="text-xl font-bold mb-2">Gourmet Vanilla Beans</h3>
                <p className="text-gray-600 mb-4">Hand-pollinated vanilla beans with exceptional vanillin content and rich, complex flavor profiles.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Length: 15cm and longer</li>
                  <li>• Vanillin: 1.8-2.4%</li>
                  <li>• Moisture: 25-35%</li>
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
                  Traditional Methods
                </div>
                <h3 className="text-xl font-bold mb-2">Traditional Curing</h3>
                <p className="text-gray-600 mb-4">Meticulous months-long curing process using traditional methods for optimal flavor development.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hand-pollinated cultivation</li>
                  <li>• Traditional curing methods</li>
                  <li>• Quality-controlled processing</li>
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
                <h3 className="text-xl font-bold mb-2">Premium Packaging</h3>
                <p className="text-gray-600 mb-4">Specialized packaging solutions to preserve aroma and freshness during global transport.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Vacuum-sealed bags</li>
                  <li>• Glass tube packaging</li>
                  <li>• Custom packaging available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/vanilla.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Collaborate and Learn
          </h2>
          <p className="text-xl mb-8 opacity-90">
            From Vanilla Experts and Culinary Professionals
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our network of vanilla growers, processors, and culinary experts. 
            Share knowledge about traditional curing methods and innovative applications.
          </p>
          <button className="bg-white text-amber-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Join Our Network
          </button>
        </div>
      </section>

      {/* Vanilla Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Discover Premium Vanilla
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Vanilla Specifications & Quality
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Bean Varieties</h4>
                  <p className="text-gray-600">Premium Vanilla Planifolia (Bourbon) and Vanilla Tahitensis varieties from optimal growing regions.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Processing Methods</h4>
                  <p className="text-gray-600">Traditional hand-pollination and months-long curing process for exceptional flavor development.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Applications</h4>
                  <p className="text-gray-600">Perfect for gourmet baking, ice cream, extracts, syrups, and perfumery applications.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Quality Standards</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Grade A Premium</li>
                  <li>15cm+ length</li>
                  <li>Black, oily, pliable</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Specifications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Vanillin: 1.8-2.4%</li>
                  <li>Moisture: 25-35%</li>
                  <li>Premium appearance</li>
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
            Experience Premium Vanilla Today!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us for exceptional vanilla beans and traditional processing methods
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
            <h2 className="text-4xl font-bold mb-4">Premium Vanilla</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Products</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Vanilla Planifolia</li>
                <li>Vanilla Tahitensis</li>
                <li>Grade A Beans</li>
                <li>Extract Grade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quality</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Grade A Premium</li>
                <li>Hand-pollinated</li>
                <li>Traditional Curing</li>
                <li>Quality Assured</li>
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
              <h4 className="font-semibold mb-2">Applications</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Gourmet Baking</li>
                <li>Ice Cream</li>
                <li>Extracts & Syrups</li>
                <li>Perfumery</li>
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

export default VanillaPage;
