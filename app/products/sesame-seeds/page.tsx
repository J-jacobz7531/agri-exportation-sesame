import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Navbar } from "@/components/navbar";

const SesameSeedsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/sesameSeeds1.webp')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
            Premium Sesame Seeds
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 opacity-90">
            High oil content sesame seeds with exceptional nutritional profile and nutty flavor
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">99.95%</div>
              <div className="text-sm opacity-80">Purity Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">48%</div>
              <div className="text-sm opacity-80">Min Oil Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">6%</div>
              <div className="text-sm opacity-80">Max Moisture</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">2%</div>
              <div className="text-sm opacity-80">Max FFA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Our Sesame Mission
          </h2>
          <TextGenerateEffect
            words="We believe that premium sesame seeds come from careful sourcing and rigorous quality control, ensuring exceptional oil content and nutritional value for global markets."
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed"
          />
        </div>
      </section>

      {/* Sesame Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Our Sesame Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Premium sesame seeds from farm to global export
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-600 to-yellow-800 relative">
                <Image
                  src="/images/sesameSeeds1.webp"
                  alt="Premium Sesame Seeds"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Premium Quality
                </div>
                <h3 className="text-xl font-bold mb-2">High Oil Content</h3>
                <p className="text-gray-600 mb-4">Premium sesame seeds with exceptional oil content and rich nutritional profile for various applications.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Purity: 99.95% minimum</li>
                  <li>• Oil Content: 48% minimum</li>
                  <li>• Multiple varieties available</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 relative">
                <Image
                  src="/images/plantation.jpeg"
                  alt="Quality Processing"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Quality Control
                </div>
                <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
                <p className="text-gray-600 mb-4">Comprehensive quality assurance with testing at every stage to ensure food safety standards.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Moisture control ≤6%</li>
                  <li>• FFA testing ≤2%</li>
                  <li>• Contaminant-free processing</li>
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
                <h3 className="text-xl font-bold mb-2">Flexible Packaging</h3>
                <p className="text-gray-600 mb-4">Multiple packaging options to meet international shipping and storage requirements.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• PP bags (25kg, 50kg)</li>
                  <li>• Jute bags available</li>
                  <li>• Custom packaging options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-800 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/sesameSeeds1.webp')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Collaborate and Learn
          </h2>
          <p className="text-xl mb-8 opacity-90">
            From Sesame Experts and Industry Professionals
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our network of sesame growers, processors, and industry experts. 
            Share knowledge about quality control, processing techniques, and market applications.
          </p>
          <button className="bg-white text-yellow-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Join Our Network
          </button>
        </div>
      </section>

      {/* Sesame Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Discover Premium Sesame Seeds
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Sesame Specifications & Quality
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Seed Varieties</h4>
                  <p className="text-gray-600">Natural White, Hulled, Black, and Brown sesame seeds from premium growing regions.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Processing Methods</h4>
                  <p className="text-gray-600">Strict quality control with comprehensive testing for purity, oil content, and safety standards.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Applications</h4>
                  <p className="text-gray-600">Perfect for baking, oil extraction, seasoning, and pharmaceutical applications.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Quality Standards</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Purity: 99.95% min</li>
                  <li>Oil: 48% min</li>
                  <li>Moisture: 6% max</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Varieties</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Natural White</li>
                  <li>Hulled Seeds</li>
                  <li>Black & Brown</li>
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
            Experience Premium Sesame Today!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us for high-quality sesame seeds and reliable export solutions
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
            <h2 className="text-4xl font-bold mb-4">Premium Sesame Seeds</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Products</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Natural White</li>
                <li>Hulled Seeds</li>
                <li>Black Sesame</li>
                <li>Brown Sesame</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quality</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>99.95% Purity</li>
                <li>48% Oil Content</li>
                <li>Quality Tested</li>
                <li>Food Safe</li>
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
                <li>Baking & Confectionery</li>
                <li>Oil Extraction</li>
                <li>Seasoning</li>
                <li>Pharmaceuticals</li>
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

export default SesameSeedsPage;
