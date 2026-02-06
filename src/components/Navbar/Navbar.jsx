'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Heart,
  Home,
  Package,
  Info,
  Phone,
  Tag,
  Truck
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },

    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Support', href: '/support', icon: Truck },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800"
        : "bg-white dark:bg-gray-950 shadow-sm"
        }`}
    >
      {/* Fixed: Removed the gray-400/white background from max-w-7xl to allow the nav background to show */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="TechMart Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="  ml-1">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Tech
                <span className="text-blue-600 dark:text-blue-400">Mart</span>
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1 font-medium">
                Tech Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 ml-10">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                >
                  <IconComponent
                    className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-blue-600 dark:text-blue-400" : ""
                      }`}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {/* Wishlist */}
            <button className="hidden sm:flex p-2 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-full transition-all duration-300 relative">
              <Heart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
                2
              </span>
            </button>

            {/* Cart */}
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-full transition-all duration-300 relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-blue-600 dark:bg-blue-500 text-white text-[10px] rounded-full min-w-[16px] h-4 flex items-center justify-center px-1 font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account */}
            <button className="hidden sm:flex p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 ${isMenuOpen
          ? "max-h-screen opacity-100 border-b shadow-xl"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
          {/* Mobile Search */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
            />
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                    }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Divider */}
          <div className="h-px bg-gray-100 dark:bg-gray-800 my-4" />

          {/* Mobile User Actions */}
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 group">
              <div className="relative">
                <Heart className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
              <span className="group-hover:text-red-500 transition-colors">Wishlist</span>
            </button>

            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 group">
              <User className="w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">My Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;