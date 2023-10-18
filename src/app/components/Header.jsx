"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { HiShoppingCart } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#f0f2f3] p-4 pt-8 lg:px-[15%] md:px-[8%]">
            <div className="flex items-center justify-between ">
                <div className="">
                    <a href="/"><Image
                        src="/mainlogo.PNG"
                        width={120}
                        height={100}
                        alt="product designer"
                    /></a>
                </div>
                <div className="hidden md:flex lg:flex text-[13.5px]">
                    <a href="/" className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold lg:mx-5 mx-2">
                        HOME
                    </a>
                    <a href="/all_products" className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold lg:mx-5 mx-2">
                        ALL PRODUCTS
                    </a>
                    <a href="/about" className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold lg:mx-5 mx-2">
                        ABOUT
                    </a>
                    <a href="/contact" className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold lg:mx-5 mx-2">
                        CONTACT
                    </a>
                    
                    <a href="#" className="flex items-center space-x-1">
                        <span className="text-[#f24d4d] text-[18px] ">$ 0.00</span>
                        <HiShoppingCart size="28" color="#f24d4d" />
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar} className="hover:text-[#f24d4d] hover:font-semibold">
                        <GiHamburgerMenu className="fa-solid fa-bars bg-[#f24d4d] text-[34px] text-white p-1 rounded-lg" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col sm:mx-4 space-y-3 divide-y-2 text-[18px] pt-2 divide-gray-400">
                    <a href="/" className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold">
                        HOME
                    </a>
                    <a href="/all_products" className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold">
                        ALL PRODUCTS
                    </a>
                    <a href="/about" className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold">
                        ABOUT
                    </a>
                    <a href="/contact   " className="text-[#2b161b] hover:text-[#f24d4d] hover:font-semibold">
                        CONTACT
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Header;
