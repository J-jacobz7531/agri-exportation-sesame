"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

interface CarouselContextValue {
  carouselWrapper: React.RefObject<HTMLDivElement> | null;
  items: React.ReactNode[];
  active: number;
  setActive: (index: number) => void;
  scrollNext: () => void;
  scrollPrev: () => void;
  goTo: (index: number) => void;
  offset: number;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export const Carousel = ({
  items,
  offset = 0,
  loop = true,
}: {
  items: React.ReactNode[];
  offset?: number;
  loop?: boolean;
}) => {
  const carouselWrapper = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!carouselWrapper.current) return;
    const handleResize = () => {
      setWidth(carouselWrapper.current?.offsetWidth || 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollNext = () => {
    if (loop) {
      setActive((prev) => (prev + 1) % items.length);
    } else {
      setActive((prev) => Math.min(items.length - 1, prev + 1));
    }
  };

  const scrollPrev = () => {
    if (loop) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    } else {
      setActive((prev) => Math.max(0, prev - 1));
    }
  };

  const goTo = (index: number) => {
    setActive(index);
  };

  const contextValue = useMemo(() => {
    return {
      carouselWrapper,
      items,
      active,
      setActive,
      scrollNext,
      scrollPrev,
      goTo,
      offset,
    };
  }, [items, active, offset]);

  return (
    <CarouselContext.Provider value={contextValue}>
      <div ref={carouselWrapper} className="w-full overflow-hidden relative">
        <div
          className="flex items-start h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${active * width + offset}px)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: `${width}px` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};

export const Card = ({
  card,
  index,
  children,
}: {
  card: {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
  };
  index: number;
  children?: React.ReactNode;
}) => {
  const { active } = useCarousel();
  const [isExpanded, setIsExpanded] = useState(false);

  const scale = useMemo(() => {
    return active === index ? 1 : 0.8;
  }, [active, index]);

  const y = useMemo(() => {
    return active === index ? 0 : 40;
  }, [active, index]);

  return (
    <motion.div
      className="p-4 w-full flex flex-col items-center justify-center"
      style={{ minHeight: "400px" }}
      animate={{
        scale: scale,
        y: y,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full h-full rounded-3xl overflow-hidden cursor-pointer"
      >
        <img
          src={card.src}
          alt={card.title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full pt-4"
          >
            {card.content}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};
