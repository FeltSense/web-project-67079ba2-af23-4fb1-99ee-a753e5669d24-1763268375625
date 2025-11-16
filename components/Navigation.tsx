'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900/95 backdrop-blur-md border-b border-cyan-500/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
          <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
          TechBiz
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link href="#portfolio" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group">
          Portfolio
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link href="#contact" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group">
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Glow effect */}
  <div className="absolute -bottom-1 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-md opacity-30"></div>
</nav>
  );
}