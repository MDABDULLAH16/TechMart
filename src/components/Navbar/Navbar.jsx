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
   
} from 'lucide-react';

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
        // { name: 'Deals', href: '/deals', icon: Tag },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Contact', href: '/contact', icon: Phone },
   
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
                : 'bg-white shadow-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="TechMart Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                Tech<span className="text-blue-600">Mart</span>
                            </h1>
                            <p className="text-xs text-gray-500 -mt-1">Tech Solutions</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2 lg:ml-12">
                        {navLinks.map((link) => {
                            const IconComponent = link.icon;
                            const isActive = isActiveLink(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        isActive
                                            ? 'text-blue-600 bg-blue-50 border border-blue-200'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    <IconComponent className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                                        isActive ? 'text-blue-600' : ''
                                    }`} />
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-black"
                            />
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search Icon - Mobile */}
                        <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300">
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Wishlist */}
                        <button className="hidden sm:flex p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300 relative">
                            <Heart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                2
                            </span>
                        </button>

                        {/* Cart */}
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 relative">
                            <ShoppingCart className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* User Account */}
                        <button className="hidden sm:flex p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-300">
                            <User className="w-5 h-5" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="md:hidden pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="bg-white border-t border-gray-200 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="space-y-2">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;
                                const isActive = isActiveLink(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-blue-600 bg-blue-50 border border-blue-200'
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                    >
                                        <IconComponent className={`w-5 h-5 ${
                                            isActive ? 'text-blue-600' : ''
                                        }`} />
                                        <span>{link.name}</span>
                                        {isActive && (
                                            <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile User Actions */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-around">
                                <button className="flex flex-col items-center space-y-1 p-3 text-gray-600 hover:text-red-500 transition-colors duration-300">
                                    <Heart className="w-6 h-6" />
                                    <span className="text-xs">Wishlist</span>
                                </button>
                                <button className="flex flex-col items-center space-y-1 p-3 text-gray-600 hover:text-green-600 transition-colors duration-300">
                                    <User className="w-6 h-6" />
                                    <span className="text-xs">Account</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;