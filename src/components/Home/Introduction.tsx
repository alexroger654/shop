import React from "react";
import { FiCheck } from "react-icons/fi";

//================== component ======================

export default function Introduction() {
  //====================== render ====================
  return (
    <section className="w-full lg:px-24 px-4 max-w-screen-2xl mx-auto my-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="w-full relative">
          <img
            src="/assets/homeImage/img_10.png"
            className=" rounded-2xl"
            alt=""
          />
        </div>
        <div className=" space-y-5">
          {/* <p className=" text-primary text-md font-semibold ">
            SOCIAL MEDIA MARKETING
          </p> */}
          <h1 className="text-3xl lg:text-5xl text-gray-900  font-extrabold  ">
            Why choose us
          </h1>
          <p className=" text-muted text-xs lg:text-md font-semibold ">
            We streamline your digital presence with cutting-edge automation tools and targeted growth strategies.
          </p>

          {/* =============================== */}

          <div className="py-2 px-6 bg-white rounded-full shadow-lg  border-l mt-8   border-[#31245b] flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#eff2fb] rounded-full flex items-center justify-center text-lg">
              <FiCheck />
            </div>
            <div className="space-y-1 ">
              <p className="text-gray-900 font-bold">Social Media Automation</p>
              <p className="text-muted text-xs lg:text-base">
                Efficiently manage posts across Facebook, Instagram, Twitter, LinkedIn, and Pinterest.
              </p>
            </div>
          </div>
          {/* ============= */}
          <div className="py-2 px-6 bg-white rounded-full shadow-lg mt-20   border-l   border-[#31245b] flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#eff2fb] rounded-full flex items-center justify-center text-lg">
              <FiCheck />
            </div>
            <div className="space-y-1 ">
              <p className="text-gray-900 font-bold">Boost YouTube Engagement</p>
              <p className="text-muted text-xs lg:text-base">
                Enhance your views, likes, and comments to reach a broader audience.
              </p>
            </div>
          </div>
          {/* ============= */}
          <div className="py-4 px-6 bg-white rounded-full shadow-lg mt-20   border-l   border-[#31245b] flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#eff2fb] rounded-full flex items-center justify-center text-lg">
              <FiCheck />
            </div>
            <div className="space-y-1 ">
              <p className="text-gray-900 font-bold">Increase Website Traffic</p>
              <p className="text-muted text-xs lg:text-base">
                Attract real visitors to your website through our community.
              </p>
            </div>
          </div>

          {/* <button className="bg-primary text-sm text-white py-5 mt-20 px-14  font-semibold  rounded-full">
            GET STARTED
          </button> */}
        </div>
      </div>
    </section>
  );
}
