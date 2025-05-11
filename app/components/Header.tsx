"use client";

import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-600 mr-2" />
          Resume <span className="text-blue-600">AI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#login"
            className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="#get-started"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
} 