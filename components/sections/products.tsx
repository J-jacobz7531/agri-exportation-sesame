"use client";
import { Carousel } from "../ui/carousel";

export function ProductsSection() {
  const slides = [
    {
      title: "Premium Cocoa Products",
      button: "Learn More",
      src: "/images/cocoaSeeds1.jpg",
    },
    {
      title: "Quality Sesame Seeds",
      button: "View Catalog",
      src: "/images/sesameSeeds1.webp",
    },
    {
      title: "Premium Coffee Beans",
      button: "Discover More",
      src: "/images/Coffee.jpeg",
    },
    {
      title: "Export Ready Products",
      button: "Get Quote",
      src: "/images/export.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Our Premium Products
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Discover our wide range of high-quality agricultural products, carefully selected and processed to meet international standards.
          </p>
        </div>
        <Carousel slides={slides} />
      </div>
    </section>
  );
}
