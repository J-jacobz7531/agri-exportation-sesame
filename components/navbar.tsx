"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div className="relative w-full flex items-center justify-center">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#hero">Hero Section</HoveredLink>
            <HoveredLink href="#about">About Us</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Premium Rice"
              href="#products"
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=140&auto=format&fit=crop"
              description="High-quality rice varieties for global markets"
            />
            <ProductItem
              title="Fresh Produce"
              href="#products"
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=140&auto=format&fit=crop"
              description="Farm-fresh fruits and vegetables"
            />
            <ProductItem
              title="Organic Spices"
              href="#products"
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=140&auto=format&fit=crop"
              description="Premium spices and herbs"
            />
            <ProductItem
              title="Quality Grains"
              href="#products"
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=140&auto=format&fit=crop"
              description="Nutritious grains and pulses"
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
