"use client"
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hottest_Deals from "../components/Hottest_Deals";
import React, { useState } from 'react';
export default function () {
    const deals = [
        {
            id: 1,
            title: 'White Printed Coffee Mug',
            old_p: '£18.00',
            imageUrl: 'mug2.jpg',
            new_p: '£15.00',
        },
        {
            id: 2,
            title: 'Printed Brown Tshirt',
            old_p: '£34.00',
            imageUrl: 'sh2.jpg',
            new_p: '£25.00',
        },
        {
            id: 3,
            title: 'Typography Teal Printed Tshirt',
            old_p: '£34.00',
            imageUrl: 'sh3.jpg',
            new_p: '£32.00',
        },
        {
            id: 4,
            title: 'Printed Green Tshirt',
            old_p: '£35.00',
            imageUrl: 'sh4.jpg',
            new_p: '£28.00',
        },
        {
            id: 5,
            title: 'Printed Tshirt Coffee Black Color',
            old_p: '£35.00',
            imageUrl: 'sh4.jpg',
            new_p: '£25.00',
        },
    ];


    const cardss = [
        {
            id: 1,
            title: 'Mugs',
            description: 'Black Printed Coffee Mug',
            imageUrl: 'mug1.jpg',
            price: '£15.00',
        },
        {
            id: 2,
            title: 'Mugs',
            description: 'Father’s Day Coffee Mug',
            imageUrl: 'mug2.jpg',
            price: '£19.00',
        },
        {
            id: 3,
            title: 'Mugs',
            description: 'Personalised Mug',
            imageUrl: 'sh3.jpg',
            price: '£15.00',
        },
        {
            id: 4,
            title: 'Mugs',
            description: 'Valentine’s Day Special Mug',
            imageUrl: 'mug4.jpg',
            price: '£18.00',
        },
        {
            id: 5,
            title: 'Tshirts',
            description: 'Green Printed Tshirt',
            imageUrl: 'sh1.jpg',
            price: '£15.00',
        },
        {
            id: 6,
            title: 'Tshirts',
            description: 'Printed Brown Tshirt',
            imageUrl: 'sh2.jpg',
            price: '£19.00',
        },
        {
            id: 7,
            title: 'Tshirts',
            description: 'Printed Dark Blue Tshirt',
            imageUrl: 'mug3.jpg',
            price: '£15.00',
        },
        {
            id: 8,
            title: 'Tshirts',
            description: 'Printed Green Tshirt',
            imageUrl: 'mug4.jpg',
            price: '£18.00',
        },
        {
            id: 9,
            title: 'Mugs',
            description: 'Father’s Day Coffee Mug',
            imageUrl: 'mug2.jpg',
            price: '£19.00',
        },
        {
            id: 10,
            title: 'Mugs',
            description: 'Personalised Mug',
            imageUrl: 'sh3.jpg',
            price: '£15.00',
        },
        {
            id: 11,
            title: 'Tshirts',
            description: 'Green Printed Tshirt',
            imageUrl: 'sh1.jpg',
            price: '£15.00',
        },
    ];

    const perPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(cardss.length / perPage);

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentCards = cardss.slice(startIndex, endIndex);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };



    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'min') {
            setMinValue(value);
        } else if (name === 'max') {
            setMaxValue(value);
        }
    };
    return (
        <div className="h-screen">
            <Header />
            <div className="bg-white lg:px-[8%] w-[100%] flex lg:flex-row flex-col-reverse flex-reverse lg:divide-x-2 ">
                <div className="lg:w-[30%] w-[100%]">
                    <div className="lg:w-64 mx-auto mt-10 sm:px-20 px-5 lg:px-0">
                        {/* Range_BAr Starts */}
                        <h1 className="mt-10 text-[18px]">Filter by price</h1>
                        <input
                            type="range"
                            className="bg-[#f24d4d] h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent"
                            id="customRange1"
                        />
                        <div className="flex justify-between mt-10">
                            <div className="text-[12px]">£10</div>
                            <div className="text-[12px]">£40</div>
                        </div>
                        {/* Range_BAr Ends */}

                        {/* Apply_Button Starts */}
                        <div className="flex justify-end mt-10">
                            <button type="button" class="text-white bg-[#f24d4d] hover:bg-[#f24d63c2] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center">
                                APPLY
                            </button>
                        </div>
                        {/* Apply_Button ends */}

                        {/* Categories Starts */}
                        <div className="mt-10">
                            <div className="text-[18px]">Categories</div>
                            <div className="flex justify-between mt-6">
                                <div className="text-[#f24d4d]">Mugs</div>
                                <div className="">(05)</div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <div className="text-[#f24d4d]">Tshirts</div>
                                <div className="">(06)</div>
                            </div>
                        </div>
                        {/* Categories ends */}

                        {/* Deals Starts */}
                        <div className="mt-10">
                            <div className="text-[20px]">Hottest Deals</div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {deals && deals.map((b) => <Hottest_Deals item={b} />)}
                            </div>
                        </div>
                        {/* Deals ends */}
                    </div>
                </div>
                <div className="lg:w-[70%] w-[100%] md:px-16 px-2">
                    {/* Upper content starts */}
                    <div className="px-[9%] lg:px-[0px] flex mt-10 space-x-1">
                        <a href="#" className="text-[13px] text-gary-300">Home</a>
                        <p className="text-[13px] text-gary-300">/</p>
                        <a href="#" className="text-[13px] text-gary-300">Shop</a>
                    </div>
                    <h1 className="mt-6 text-[58px] text-[#f24d4d] px-[9%] lg:px-[0px]">Shop</h1>
                    <div className="sm:flex justify-between mt-16 px-[9%] lg:px-[0px]">
                        <div>Showing 1–9 of 11 results</div>
                        <div>
                            <select class="bg-gray-100 py-2 px-3">
                                <option value="Default sorting">Default sorting</option>
                                <option value="Sort by popularity">Sort by popularity</option>
                                <option value="Sort by average rating">Sort by average rating</option>
                                <option value="Sort by latest">Sort by latest</option>
                                <option value="Sort by price : Low to High">Sortbyprice:L to H</option>
                                <option value="Sort by price : High to Low">Sortbyprice:H to L</option>
                            </select>
                        </div>
                    </div>
                    {/* Upper content ends */}



                    {/* Card Starts */}
                    <div className="container mx-auto mt-4">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                            {currentCards.map((card) => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    imageUrl={card.imageUrl}
                                    price={card.price}
                                />
                            ))}
                        </div>
                        <div className="mt-4">
                            {currentPage > 1 && (
                                <button onClick={handlePrev} className="mr-2 p-2 px-3 py-3 bg-[#f24d4d] text-white">
                                    Pre
                                </button>
                            )}
                            {currentPage < totalPages && (
                                <button onClick={handleNext} className="p-2 bg-[#f24d4d] text-white">
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Card Ends */}
                </div>
            </div>
            <div className="mt-20">
                <Footer />
            </div>









        </div>
    )
}