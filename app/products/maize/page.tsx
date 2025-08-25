import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Navbar } from "@/components/navbar";

const MaizePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/corn.jpg')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
            Premium Maize
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 opacity-90">
            High-quality maize sourced from trusted farmers, meeting international standards for food and industrial applications
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">25+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">14%</div>
              <div className="text-sm opacity-80">Max Moisture</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50,000</div>
              <div className="text-sm opacity-80">Tons Exported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">20 ppb</div>
              <div className="text-sm opacity-80">Max Aflatoxin</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Our Maize Mission
          </h2>
          <TextGenerateEffect
            words="We believe that the finest maize comes from sustainable farming practices and rigorous quality control, ensuring safe and nutritious grain from farm to table."
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed flex flex-wrap justify-center"
          />
        </div>
      </section>

      {/* Maize Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Our Maize Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Comprehensive maize services from cultivation to export
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-600 to-yellow-800 relative">
                <Image
                  src="/images/corn.jpg"
                  alt="Premium Maize"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Premium Grade
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Maize Varieties</h3>
                <p className="text-gray-600 mb-4">High-quality yellow and white maize varieties with excellent nutritional value and low moisture content.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Yellow & White varieties</li>
                  <li>• Moisture: 14% max</li>
                  <li>• Broken kernels: 3% max</li>
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
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">Comprehensive testing and quality control to ensure international standards and food safety.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Aflatoxin testing: 20 ppb max</li>
                  <li>• Foreign matter: 1.5% max</li>
                  <li>• International standards</li>
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
                <h3 className="text-xl font-bold mb-2">Secure Packaging</h3>
                <p className="text-gray-600 mb-4">Robust packaging solutions to ensure maize remains dry and protected during transport.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• PP bags (50kg)</li>
                  <li>• Bulk container shipments</li>
                  <li>• Custom packaging options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-800 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/corn.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Collaborate and Learn
          </h2>
          <p className="text-xl mb-8 opacity-90">
            From Agricultural Experts and Industry Professionals
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our network of maize farmers, processors, and exporters. 
            Share knowledge about sustainable farming practices and quality standards in maize production.
          </p>
          <button className="bg-white text-yellow-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Join Our Network
          </button>
        </div>
      </section>

      {/* Maize Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Discover Premium Maize
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Maize Specifications & Quality
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Grain Varieties</h4>
                  <p className="text-gray-600">Premium yellow and white maize varieties sourced from optimal growing regions with excellent nutritional profiles.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Quality Standards</h4>
                  <p className="text-gray-600">Rigorous testing for moisture, aflatoxin levels, and foreign matter to ensure international food safety standards.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Applications</h4>
                  <p className="text-gray-600">Suitable for human consumption, animal feed, and industrial applications including ethanol and starch production.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Quality Control</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Moisture: 14% max</li>
                  <li>Broken kernels: 3% max</li>
                  <li>Foreign matter: 1.5% max</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Safety Standards</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Aflatoxin: 20 ppb max</li>
                  <li>International certified</li>
                  <li>Food grade quality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Partner with Us for Premium Maize Today!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience quality maize solutions with reliable supply and international standards
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
            <h2 className="text-4xl font-bold mb-4">Premium Maize</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Products</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Yellow Maize</li>
                <li>White Maize</li>
                <li>Food Grade</li>
                <li>Feed Grade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quality</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>14% Max Moisture</li>
                <li>Low Aflatoxin</li>
                <li>Minimal Breakage</li>
                <li>International Standards</li>
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
                <li>Human Consumption</li>
                <li>Animal Feed</li>
                <li>Ethanol Production</li>
                <li>Starch Industry</li>
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

export default MaizePage;
