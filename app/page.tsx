"use client";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ProductsSection } from "@/components/sections/products";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ProcessSection } from "@/components/sections/process";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-neutral-950">
      {/* Fixed Navbar */}
      <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Products Section */}
      <section id="products">
        <ProductsSection />
      </section>

      {/* Testimonials Section - Why Partner With Us */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Process Section - How We Do Business */}
      <section id="process">
        <ProcessSection />
      </section>

      {/* Footer */}
      <footer className="relative text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Agricultural Exports</h3>
              <p className="text-neutral-400 mb-4">
                Leading the way in premium agricultural exports, connecting farms to global markets with quality assurance and reliable delivery.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Premium Rice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fresh Produce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organic Spices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Grains</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>Email: info@agriexports.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Export Lane</li>
                <li>City, Country 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
            <p>&copy; 2024 Agricultural Exports. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
