"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };
  
  return (
    <div className="relative w-full flex items-center justify-center">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/" onClick={handleHomeClick}>Home Page</HoveredLink>
            <HoveredLink href="#hero">Hero Section</HoveredLink>
            <HoveredLink href="#about">About Us</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Sesame Seeds"
              href="/products/sesame-seeds"
              src="/images/sesameSeeds1.webp"
              description="Premium quality seeds with high oil content"
            />
            <ProductItem
              title="Coffee"
              href="/products/coffee"
              src="/images/Coffee.jpeg"
              description="Hand-picked Arabica and Robusta beans"
            />
            <ProductItem
              title="Cocoa"
              href="/products/cocoa"
              src="/images/cocoaSeeds1.jpg"
              description="Sustainably sourced cocoa beans"
            />
            <ProductItem
              title="Vanilla"
              href="/products/vanilla"
              src="/images/export.jpeg"
              description="Bourbon-grade vanilla beans"
            />
            <ProductItem
              title="Maize"
              href="/products/maize"
              src="/images/plantation.jpeg"
              description="High-quality yellow and white maize"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#process">Export Process</HoveredLink>
            <HoveredLink href="#quality">Quality Assurance</HoveredLink>
            <HoveredLink href="#logistics">Logistics & Shipping</HoveredLink>
            <HoveredLink href="#certification">Certifications</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#testimonials">Why Partner With Us</HoveredLink>
            <HoveredLink href="#process">Our Process</HoveredLink>
            <HoveredLink href="#team">Our Team</HoveredLink>
            <HoveredLink href="#history">Company History</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
