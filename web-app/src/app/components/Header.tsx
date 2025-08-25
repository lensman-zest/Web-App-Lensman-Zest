"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      name: "Products",
      sub: [
        { label: "HDAs", href: "/products/hdas" },
        { label: "Automation ToolCase", href: "/products/toolcase" },
        { label: "Visual Effects", href: "/products/vfx" },
      ],
    },
    {
      name: "Industries",
      sub: [
        { label: "Film & TV", href: "/industries/film-tv" },
        { label: "Game Development", href: "/industries/games" },
        { label: "Motion Graphics", href: "/industries/motion-graphics" },
        { label: "Virtual Reality", href: "/industries/vr" },
        { label: "Synthetic Data for AI/ML", href: "/industries/synthetic-data" },
      ],
    },
    {
      name: "Community",
      sub: [
        { label: "News Feed", href: "/community/news" },
        { label: "Gallery", href: "/community/gallery" },
        { label: "Artist Directory", href: "/community/artists" },
      ],
    },
    {
      name: "Learn",
      sub: [
        { label: "Tasks and Webinar", href: "/learn/webinars" },
        { label: "Documentation", href: "/learn/docs" },
      ],
    },
  ];

  return (
    <header className="bg-[#1B1B1F] text-[#A8A8A8] shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 xl:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 relative">
          <div className="text-2xl font-bold tracking-wide text-white relative">
            LZ
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B84A39] transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex gap-8 relative">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseOver={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <button className="flex items-center gap-1 relative text-white">
                {item.name}
                {item.sub && <ChevronDown size={16} />}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#B84A39] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown */}
              {item.sub && active === i && (
                <ul className="absolute left-0 mt-2 bg-[#2C2C2C] border border-[#333] rounded-lg shadow-lg py-2 w-56 z-20">
                  {item.sub.map((subItem, j) => (
                    <li key={j}>
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-[#1B1B1F] hover:text-[#B84A39] transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Login */}
        <Link
          href="/login"
          className="hidden xl:inline-block bg-[#B84A39] text-white px-4 py-2 rounded-md hover:bg-[#a03c2f] transition-colors text-sm uppercase"
        >
          Login
        </Link>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#2C2C2C] border-t border-[#333] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, i) => (
              <li key={i}>
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-white">
                    {item.name}
                    {item.sub && <ChevronDown size={16} />}
                  </summary>
                  {item.sub && (
                    <ul className="mt-2 pl-4 text-[#A8A8A8]">
                      {item.sub.map((subItem, j) => (
                        <li
                          key={j}
                          className="py-1 hover:text-[#B84A39] cursor-pointer"
                        >
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="block bg-[#B84A39] text-white px-4 py-2 rounded-md text-center hover:bg-[#a03c2f] transition-colors text-sm uppercase"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
