'use client'

import ProfileDropDown from '@/components/ProfileDropDown';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Dropdown from './Dropdown';
import LeadGeneration from '@/components/leadGeneration';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  const serviceRef = useRef<any>();
  // =============== HOOKS ==================================
  const { data: session } = useSession();


  useEffect(() => {
    const handleDropDown = (e: any) => {
      //@ts-ignore
      if (!serviceRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);




  return (
    <section>
      <nav className=" mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <Link href="/">
            <p className="text-xl font-extrabold dm-serif-text-regular">Viral d <span className="text-primary">24/7</span></p>
          </Link>
          <div
            className={`mt-14 flex flex-col space-y-8  lg:mt-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-6 font-semibold lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
            <div className="flex flex-col ">
              <button
                ref={serviceRef}
                onClick={() => setState(!state)}
                className={`flex flex-row rounded-lg  lg:text-sm mt-1  text-gray-800 hover:text-primary ${menuOne ? "text-gray-800 " : "text-black lg:border lg:border-white"}`}
              >
                Services
                <svg
                  className={`w-6 h-6 fill-current transition-transform duration-300 ${menuOne ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                </svg>
              </button>
              {state && (
                <Dropdown setMenuOne={setMenuOne} />

              )}
            </div>
            <Link
              onClick={() => {
                setIsOpen(false)
                setMenuOne(false)
              }}
              href="/about_us"
              className=" rounded-lg  lg:text-sm  text-gray-800 hover:text-primary"
            >
              About Us
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false)
                setMenuOne(false)
              }}
              href="/organic_growth"
              className=" rounded-lg  lg:text-sm  text-gray-800 hover:text-primary"
            >
              Organic Growth
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false)
                setMenuOne(false)
              }}
              href="/whatsapp"
              className=" rounded-lg  lg:text-sm  text-gray-800 hover:text-primary"
            >
              Whatsapp Marketing
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false)
                setMenuOne(false)
              }}
              href="/web-traffic"
              className=" rounded-lg  lg:text-sm  text-gray-800 hover:text-primary"
            >
              Website traffic
            </Link>
            <div>
              <LeadGeneration />
            </div>
            <Link
              onClick={() => {
                setIsOpen(false)
                setMenuOne(false)
              }}
              href="/contact_us"
              className=" rounded-lg  lg:text-sm  text-gray-800 hover:text-primary"
            >
              Contact Us
            </Link>
            {/* <Link
              onClick={() => setIsOpen(false)}
              href="#"
              className=" lg: rounded-lg   lg:  text-gray-800 hover:text-primary"
            >
              FAQs
            </Link> */}
          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >

            {
              session?.user?.email ? <>
                <ProfileDropDown />


              </>

                : <>

                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/sign_up"
                    className=" rounded-lg  py-2 px-4 hidden lg:block  text-gray-800 hover:text-primary"
                  >
                    Sign Up
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className=" rounded-lg bg-black py-2 px-4 text-center text-white hover:bg-gray-800"

                    href="/sign_in"
                  >
                    Login
                  </Link>
                </>
            }


          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section >
  );
}
