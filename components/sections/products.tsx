"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconSeeding,
  IconCoffee,
  IconGrain,
  IconTruck,
  IconLeaf,
  IconWorld,
  IconPackage,
} from "@tabler/icons-react";

export function ProductsSection() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="w-full h-full px-4">
        <h2 className="max-w-7xl mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center mb-16">
          Our Premium Products
        </h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

const items = [
  {
    title: "Premium Cocoa Products",
    description: "Rich and flavorful cocoa beans carefully selected and processed for gourmet chocolates and culinary delights.",
    header: <ProductImage src="/images/cocoaSeeds1.jpg" alt="Premium Cocoa" />,
    icon: <IconSeeding className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Quality Sesame Seeds",
    description: "High-purity sesame seeds perfect for oil extraction, baking, and as healthy toppings for various dishes.",
    header: <ProductImage src="/images/sesameSeeds1.webp" alt="Sesame Seeds" />,
    icon: <IconGrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Premium Coffee Beans",
    description: "Aromatic coffee beans sourced from finest estates, roasted to perfection for bold flavor.",
    header: <ProductImage src="/images/Coffee.jpeg" alt="Coffee Beans" />,
    icon: <IconCoffee className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Export Standards",
    description: "Wide range of agricultural products meeting international quality standards, ready for worldwide export.",
    header: <ProductImage src="/images/export.jpeg" alt="Export Products" />,
    icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Organic Farming",
    description: "Sustainable and organic farming practices ensuring the highest quality produce.",
    header: <ProductImage src="/images/plantation.jpeg" alt="Organic Farming" />,
    icon: <IconLeaf className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Quality Processing",
    description: "State-of-the-art processing facilities ensuring product quality and safety.",
    header: <ProductImage src="/images/drying.jpeg" alt="Processing" />,
    icon: <IconPackage className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Reliable Logistics",
    description: "Efficient supply chain and logistics ensuring timely delivery of fresh products worldwide.",
    header: <ProductImage src="/images/corn.jpg" alt="Logistics" />,
    icon: <IconTruck className="h-4 w-4 text-neutral-500" />,
  },
];
