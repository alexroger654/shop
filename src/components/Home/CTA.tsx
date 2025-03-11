'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

export default function CTA() {

    // =============== HOOKS ==================================
    const { data: session } = useSession();




    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r bg-[#31245b] flex items-center justify-between flex-col lg:flex-row"
                >
                    <div className="block text-center mb-5 lg:text-left lg:mb-0">
                        <h2
                            className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                        >
                            Automate your social media with no credit card required
                        </h2>
                        <p className="text-xl text-indigo-100">
                            Enjoy 2 months absolutely free!
                        </p>
                    </div>
                    <Link
                        href={session?.user?.id ? "/auto_like" : "/sign_in"}
                        className="flex items-center gap-2 bg-white rounded-full shadow-sm text-base text-indigo-600 font-semibold py-4 px-8 transition-all duration-500 text-nowrap"
                    >Get Started
                        <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                stroke="#4F46E5"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>

    )
}
