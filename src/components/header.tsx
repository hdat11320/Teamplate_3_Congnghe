"use client";
import "../../public/css/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "../public/images/logo.svg"
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope, faSearch, faShoppingBag, faClock, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import BackToTopButton from "./backtotop";

export default function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };
    return (

        <header id='site-header' className="site-header sticky top-0 z-50">
            <BackToTopButton />
            <div className="header-topbar">
                <div className="octf-area-wrap mx-auto flex justify-between items-center">
                    <div className=" w-full px-[15px] mx-10">
                        <div className="flex justify-between items-center">
                            {/* Phần bên trái: Số điện thoại và Email */}
                            <div className="flex items-center space-x-6">
                                <ul className="topbar-info flex space-x-4">

                                    <li>
                                        <a href="mailto:engitech@mail.com" className="hover:text-gray-400 ">
                                            <FontAwesomeIcon icon={faEnvelope} className="text-white pr-2" /> engitech@mail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+1-800-456-478-23" className="hover:text-gray-400 text-white">
                                            <FontAwesomeIcon icon={faClock} className="text-white pr-2" /> Mon - Sat: 8.00 am - 7.00 pm
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Phần bên phải: Lời chào và mạng xã hội */}
                            <div className="flex items-center space-x-6">
                                <span className="text-sm">We are creative, ambitious and ready for challenges! <span className="text-sky-400">Hire us</span></span>
                                <ul className="social-list flex space-x-4">
                                    <li>
                                        <a href="#" className="text-gray-400 cursor-pointer">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="octf-main-header sticky top-0 z-10 bg-white shadow">
                <div className="octf-area-wrap">
                    <div className="mx-12 octf-mainbar-container px-[15px] ">
                        <div className="octf-mainbar">
                            <div className="octf-mainbar-row octf-row">
                                <div className="octf-col logo-col">
                                    <div id="site-logo" className="site-logo">
                                        <Link href="/">
                                            <Image src="/images/logo.svg" alt="Engitech" width={100} height={40} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="menu-col">
                                    <nav id="site-navigation" className="main-navigation">
                                        <ul className="menu">
                                            <li className="menu-item-has-children current-menu-item current-menu-ancestor">
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className="menu-item-has-children ">
                                                <a href="#">Company</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/Company/AboutUs">About us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/WhyChooseUs">Why Choose Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/OurTeam">Our team</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/SingleTeam">Single team</Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link href="/Company/Shop/shops">Shop</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link href="/Company/Shop/singleProduct">Single Product</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/Company/Shop/checkout">Checkout Page</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/Company/Shop/cart">Cart Page</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/Typography">Typography</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/Elements">Elements</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/Faqs">FAQS</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/404">404 Error</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Company/ComingSoon">Coming Soon</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Services</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="/Services/It-Service">It Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="/Services/Web-Development">Web Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="/Services/Mobile-Development">Mobile Development</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Projects</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/Portfo">Portfolio Masonry</Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">Portfolio Carousel</a>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Portfolio Grid</a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="#">Portfolio 3 Columns</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Portfolio 4 Columns</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Portfolio No Gap</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Portfolio Details</a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="#">Single Layout 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Single Layout 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Single Layout 3</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/Blogs/blogGrid">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">Blog Listing</a>
                                                    </li>
                                                    <li>
                                                        <Link href="/Blogs/blogGrid">Blog Grid</Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">Blog Single</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Contacts</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="flex justify-end items-center space-x-6">
                                    {/* Giỏ hàng */}
                                    <div className="h-16"></div>
                                    <div className="relative">
                                        <a href="cart-page.html" className="relative text-gray-600 hover:text-gray-800">
                                            <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
                                            <span className="absolute -top-2 -right-2 bg-sky-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                0
                                            </span>
                                        </a>
                                        <div className="hidden absolute right-0 top-10 bg-white shadow-md border rounded-lg p-4">
                                            <p className="text-sm text-gray-500">No products in the cart.</p>
                                        </div>
                                    </div>
                                    <div className="h-16"></div>
                                    {/* Tìm kiếm */}
                                    <div className="relative">
                                        <button className="text-gray-600 hover:text-gray-800">
                                            <FontAwesomeIcon icon={faSearch} className="text-xl" />
                                        </button>
                                        {/* Form tìm kiếm */}
                                        <div className="hidden absolute right-0 top-10 bg-white shadow-md border rounded-lg p-4">
                                            <form className="flex items-center space-x-2">
                                                <input
                                                    type="search"
                                                    placeholder="Search…"
                                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                                />
                                                <button type="submit" className="text-sky-400 hover:text-sky-600">
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Số điện thoại */}
                                    <div className="flex items-center space-x-7 mx-12  ">
                                    <span className="border-l border-gray-400 h-16 "></span>
                                        <FontAwesomeIcon icon={faPhoneFlip} className="text-sky-400 text-xl" />
                                        <div className="max-w-21 text-sm leading-tight  py-0">
                                            <p className="text-sm text-gray-600 leading-tight py-0">Have Any <br /> Questions?<br />
                                            <a href="tel:+1-800-456-478-23" className="text-black font-bold  hover:text-sky-400 text-base leading-tight py-0">
                                                +1-800- <br />456-478-23
                                            </a></p>
                                        </div>
                                    </div>
                                    <div className="h-16"></div>
                                    {/* Nút Free Quote */}
                                    <a
                                        href="#"
                                        className=" uppercase bg-sky-400 text-white font-bold px-7 py-3 hover:bg-purple-500 hover:text-white"
                                    >
                                        Free Quote
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
