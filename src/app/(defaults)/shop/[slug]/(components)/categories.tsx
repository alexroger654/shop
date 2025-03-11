'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
};

const categories = [
    {
        title: 'For Women',
        products: '3,495 Products',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image
    },
    {
        title: 'For Men',
        products: '2,847 Products',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'For Kids',
        products: '385 Products',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Accessories',
        products: '2,483 Products',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Accessories',
        products: '2,483 Products',
        image: 'https://via.placeholder.com/300x200',
    },
];

export default function Categories() {
    return (
        <div className=" w-full mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
            <Carousel
                swipeable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="transform 0.5s ease-in-out"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                containerClass="gap-4 py-8 "
            >
                {categories.map((category, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden shadow-lg mx-2">
                        <img src={category.image} alt={category.title} className="w-full h-36 md:h-56 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white">
                            <h3 className=" text-xs md:text-lg font-semibold">{category.title}</h3>
                            <p className="text-[8px]  md:text-sm">{category.products}</p>
                            <button className="mt-2 bg-white text-black py-2 px-4 text-[8px] md:text-sm font-medium rounded">
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}