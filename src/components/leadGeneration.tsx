"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LeadGeneration = () => {
    const [state, setState] = useState(false); // Controls the main dropdown visibility
    const profileRef = useRef<any>();

    const navigation = [
        { title: "Dashboard", path: "/analytics" },
        { title: "Earn Points", path: "/auto_like" },
        { title: "Profile", path: "/profile" },
    ];

    // =============== HOOKS ==================================
    const { data: session } = useSession();

    useEffect(() => {
        const handleDropDown = (e: any) => {
            //@ts-ignore
            if (!profileRef?.current?.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);
    }, []);

    return (
        <div className="relative border-t lg:border-none">
            <div className="flex items-center justify-center gap-4">
                <button
                    ref={profileRef}
                    className="hidden w-10 h-10 outline-none rounded-full lg:block"
                    onClick={() => setState(!state)}
                >
                    <p className="rounded-lg text-sm lg:text-gray-800 hover:text-primary font-bold">
                        Leads
                    </p>
                </button>
            </div>
            <ul
                className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:z-50 lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? "" : "lg:hidden"
                    }`}
            >
                <li>
                    <Link
                        className="block text-gray-600 text-sm hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
                        href="/linkedin/leads"
                    >
                        LinkedIn Leads
                    </Link>
                </li>
                <li>
                    <Link
                        className="block text-gray-600 text-sm hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
                        href="#"
                    >
                        Instagram Leads (coming soon)
                    </Link>
                </li>
                <li>
                    <Link
                        className="block text-gray-600 text-sm hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
                        href="#"
                    >
                        Facebook Leads (coming soon)
                    </Link>
                </li>
                <li className="relative group">
                    {/* Reputation Management with hover-based side dropdown */}
                    <button className="block w-full text-left text-gray-600 text-sm hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3">
                        Reputation Management
                    </button>

                    {/* Side dropdown for Reputation Management, appears on hover */}
                    <ul className="absolute top-0 left-full w-64 p-4 bg-white border border-gray-300 rounded-md shadow-lg z-50 space-y-4 hidden group-hover:block">
                        <li>
                            <Link
                                className="block text-gray-600 text-sm hover:text-gray-900"
                                href="/gmb"
                            >
                                Google My Business
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block text-gray-600 text-sm hover:text-gray-900"
                                href="/get_service/quora?type=like"
                            >
                                Quora
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default LeadGeneration;
