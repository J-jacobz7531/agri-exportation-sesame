"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working with this agricultural export company has been exceptional. Their commitment to quality and timely delivery has made them our preferred partner for sourcing premium rice varieties.",
      name: "Sarah Johnson",
      title: "Procurement Manager, Global Foods Inc.",
    },
    {
      quote: "The quality of their organic spices is unmatched. They maintain consistent standards and their supply chain reliability has helped us expand our market reach significantly.",
      name: "Ahmed Hassan",
      title: "CEO, Middle East Trading Co.",
    },
    {
      quote: "Their professional approach to international trade and deep understanding of export regulations has made our business partnerships seamless and profitable.",
      name: "Maria Rodriguez",
      title: "Import Director, European Markets Ltd.",
    },
    {
      quote: "From negotiation to delivery, their transparent processes and quality assurance have exceeded our expectations. They truly understand the global agricultural market.",
      name: "David Chen",
      title: "Supply Chain Manager, Asia Pacific Foods",
    },
    {
      quote: "The freshness and quality of their fruits and vegetables, combined with their efficient logistics, has made them an invaluable partner for our retail chain.",
      name: "Emma Thompson",
      title: "Sourcing Director, Fresh Market Solutions",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Why Partner With Us
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Hear from our trusted partners around the world who have experienced our commitment to excellence in agricultural exports.
          </p>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
