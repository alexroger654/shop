import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";


// Handler hook for when Outside click dropdown close End Code====>>

const Dropdown = ({ setMenuOne }: any) => {

    let services = [
        {
            name: "Facebook",
            icon: "/assets/serviceIcons/facebook.png",
            link: "/service/facebook",
        },
        {
            name: "Instagram",
            icon: "/assets/serviceIcons/instagram.png",
            link: "/service/instagram",
        },
        {
            name: "TickTok",
            icon: "/assets/serviceIcons/tiktok.png",
            link: "/service/tiktok",
        },
        {
            name: "Twitter",
            icon: "/assets/serviceIcons/twitter.png",
            link: "/service/twitter",
        },

        {
            name: "Youtube",
            icon: "/assets/serviceIcons/youtube.png",
            link: "/service/youtube",
        },
        {
            name: "Pinterest",
            icon: "/assets/serviceIcons/pinterest.png",
            link: "/service/pinterest",
        },
        {
            name: "Linkedin",
            icon: "/assets/serviceIcons/linkedin.png",
            link: "/linkedin",
        },
    ];




    return (
        <>
            <div className='lg:absolute  lg:left-0 lg:top-20 z-50 px-2 lg:px-20 lg:w-[1400px] '>
                <div className=" flex w-full flex-col rounded-lg px-5 py-5  bg-white  shadow-sm  lg:grid  lg:grid-cols-4 lg:gap-6 lg:py-7 ">
                    {
                        services?.map(item =>
                            <div key={item.name} className="w-full">
                                <div className="flex items-center  gap-4 bg-gray-100 py-3 px-3 rounded-md">
                                    <img src={item.icon} className="lg:w-10 lg:h-10 w-7 h-7 rounded-full" alt="" />
                                    <p className="text-sm lg:text-base">{item.name}</p>
                                </div>
                                <div className="px-2 mt-3">
                                    <Link onClick={() => setMenuOne(false)} href={`${item.link}?type=like`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                        Get {item.name} Like
                                    </Link>

                                    <Link onClick={() => setMenuOne(false)} href={`${item.link}?type=view`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                        Get {item.name} View
                                    </Link>
                                    <Link onClick={() => setMenuOne(false)} href={`${item.link}?type=comment`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                        Get {item.name} Comment
                                    </Link>
                                    {
                                        item.name !== "pinterest" &&
                                        <Link onClick={() => setMenuOne(false)} href={`${item.link}?type=followers`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                            Get {item.name} Followers
                                        </Link>
                                    }


                                    {
                                        item.name == "facebook" &&
                                        <Link onClick={() => setMenuOne(false)} href={`${item.link}`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                            Get {item.name} Page Like
                                        </Link>
                                    }



                                </div>


                            </div>)
                    }



                    <div className="w-full">
                        <div className="flex items-center  gap-4 bg-gray-100 py-3 px-3 rounded-md">
                            <img src="/assets/serviceIcons/management-group.jpg" className="lg:w-10 lg:h-10 w-7 h-7 rounded-full" alt="" />
                            <p>Management </p>
                        </div>
                        <div className="px-2 mt-3">
                            <Link onClick={() => setMenuOne(false)} href={`/linkedin`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                Get LinkedIn Leads
                            </Link>
                            <Link onClick={() => setMenuOne(false)} href={`/`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                Get Instagram Leads
                            </Link>
                            <Link onClick={() => setMenuOne(false)} href={`/`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                LinkedIn Post Management (coming soon)
                            </Link>
                            <Link onClick={() => setMenuOne(false)} href={`/`} className="py-2 text-xs lg:text-sm block rounded-md hover:bg-[#3f009a]/10 px-3  ">
                                Facebook Post Management (coming soon)
                            </Link>






                        </div>


                    </div>
                </div>
            </div>
        </>
    )
};

export default Dropdown;

const DropdownItem = ({ label, href }: any) => {






    return (
        <a
            href={href}
            className='block py-2 px-5 text-base text-dark-5 hover:text-white'
        >
            {label}
        </a>
    )
};
