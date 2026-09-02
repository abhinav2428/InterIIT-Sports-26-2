'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Smartphone, Download, Award, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'LEGACY', href: '/legacy' },
  { label: 'SCHEDULE', href: '/schedule' },
  { label: 'MATCHES', href: '/matches' },
  { label: 'EVENTS', href: '/events' },
  { label: 'ATHLETICS', href: '/athletics' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md border-b border-outline-variant/30 shadow-md py-3'
            : 'bg-primary/90 backdrop-blur-md border-b border-outline-variant/20 py-4'
        }`}
      >
        <div className="max-w-container-max mx-auto px-margin-x flex justify-between items-center">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/white-iism.png"
              alt="59th Inter-IIT Sports Meet Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-headline-lg text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                59th INTER-IIT
              </span>
              <span className="text-secondary-container text-xs font-bold tracking-wider uppercase mt-0.5">
                IIT KHARAGPUR 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 font-label-bold text-xs xl:text-sm uppercase transition-all duration-200 rounded ${
                    isActive
                      ? 'text-secondary-container font-extrabold'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-container rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-secondary-container" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-primary/98 backdrop-blur-xl border-b border-outline-variant/30 shadow-2xl lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg font-label-bold text-sm tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'bg-secondary-container text-on-secondary-container font-extrabold'
                          : 'text-gray-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
