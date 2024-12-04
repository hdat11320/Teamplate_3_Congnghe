"use client";
import Link from "next/link";
import "../../public/css/style.css"

import { useState } from 'react';

const Header_Con = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const toggleSearch = () => {
        setSearchOpen((prev) => !prev);
    };

    return (
        <header id="site-header" className="bg-white sticky top-0 w-full">
            <div className="bg-[#141d38] text-gray-300 text-sm ">
                <div className="w-full mx-auto px-11 pt-3 -mb-1 ">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2">
                            <ul className="flex space-x-4">
                                <li className="flex items-center">
                                    <i className="fas fa-envelope"></i>
                                    <Link href="mailto:engitech@mail.net" className="ml-2 font-thin">engitech@mail.net</Link>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-clock"></i>
                                    <span className="ml-2">Mon - Sat: 8.00 am - 7.00 pm</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 text-right">
                            <div className="flex justify-end">
                                <ul className="flex items-center space-x-4">
                                    <li >We are creative, ambitious and ready for challenges! <Link href="contact.html" className="text-blue-500">Hire Us</Link></li>
                                </ul>
                                <ul className="flex items-center space-x-4 ml-4">
                                    <li><Link href="http://twitter.com/" target="_self"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="http://facebook.com/" target="_self"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="http://linkedin.com/" target="_self"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="http://instagram/" target="_self"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white sticky top-0 z-10 shadow">
                <div className="w-full mx-auto px-12 py-2">
                    <div className="flex justify-between items-center">
                        <div className="logo-col">
                            <div id="site-logo" className="site-logo">
                                <Link href="index.html">
                                    <img src="../images/logo.svg" alt="Engitech" className="h-10" />
                                </Link>
                            </div>
                        </div>
                        <div className="menu-col hidden md:block">
                            <nav id="site-navigation" className="main-navigation">
                                <ul className="flex space-x-12">
                                    <li className="relative group">
                                        <Link href="index.html">Home</Link>
                                        <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                                            <li><Link href="index.html" className="block px-4 py-2">Home 1</Link></li>
                                            <li><Link href="index-2.html" className="block px-4 py-2">Home 2</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <Link href="#">Company</Link>
                                        <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                                            <li><Link href="about-us.html" className="block px-4 py-2">About us</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <Link href="#">Services</Link>
                                        <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                                            <li><Link href="it-services.html" className="block px-4 py-2">It Services</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <Link href="#">Projects</Link>
                                        <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                                            <li><Link href="portfolio-masonry.html" className="block px-4 py-2">Portfolio Masonry</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <Link href="blog.html">Blog</Link>
                                        <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                                            <li><Link href="blog.html" className="block px-4 py-2">Blog Listing</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="contact.html">Contacts</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="cta-col text-right">
                            <div className="flex items-center space-x-6">
                                <div className="relative">
                                    <Link className="cart-icon" href="cart-page.html">
                                        <i className="fa-solid fa-cart-shopping"></i><span className="count">0</span>
                                    </Link>
                                    <div className="absolute hidden bg-white shadow-lg">
                                        <p className="p-2">No products in the cart.</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="toggle_search cursor-pointer" onClick={toggleSearch}>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    {isSearchOpen && (
                                        <div className="search-form absolute bg-white shadow-lg flex">
                                            <form className="flex items-center">
                                                <input type="search" className="border rounded-l-lg w-64 h-12 text-lg p-2" placeholder="Search …" name="s" />
                                                <button type="submit" className="bg-blue-500 text-white h-12 rounded-r-lg px-4 flex items-center justify-center">
                                                    <i className="fa-solid fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center hidden md:flex">
                                    <i className="fas fa-phone"></i>
                                    <div className="ml-2">
                                        <span>Have Any Questions?</span>
                                        <span className="main-text"><Link href="tel:+1-800-456-478-23" className="text-blue-500">+1-800-456-478-23</Link></span>
                                    </div>
                                </div>
                                <div>
                                    <Link className="bg-blue-500 text-white px-4 py-2" href="contact.html">Free Quote</Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button id="menu-toggle" className="p-2" onClick={toggleMobileMenu}>
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="mobile-menu md:hidden">
                    <nav>
                        <ul className="flex flex-col space-y-2 p-4 bg-white shadow-lg">
                            <li><Link href="index.html" className="block py-2">Home</Link></li>
                            <li><Link href="#" className="block py-2">Company</Link></li>
                            <li><Link href="#" className="block py-2">Services</Link></li>
                            <li><Link href="#" className="block py-2">Projects</Link></li>
                            <li><Link href="blog.html" className="block py-2">Blog</Link></li>
                            <li><Link href="contact.html" className="block py-2">Contacts</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header_Con;