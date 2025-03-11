import React from "react";

export default function Blogs() {
  return (
    <>
      <section className="py-24 bg-accent-foreground ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-manrope text-3xl lg:text-5xl text-center font-bold text-gray-900 mb-2 lg:mb-4">
              Suitable pricing plans
            </h2>
            <p className="text-muted text-sm lg:text-xl text-center leading-6">
              7 Days free trial. No credit card required.
            </p>
          </div>
          <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl bg-white shadow-lg">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  Jan 01, 2023
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  Clever ways to invest in product to organize your portfolio
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Discover smart investment strategies to streamline and
                  organize your portfolio..
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more..
                </a>
              </div>
            </div>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl bg-white shadow-lg">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244340.png"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  Feb 01, 2023
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  How to grow your profit through systematic investment with us
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Unlock the power of systematic investment with us and watch
                  your profits soar. Our..
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more..
                </a>
              </div>
            </div>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl bg-white shadow-lg">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244356.png"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  Mar 01, 20233
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  How to analyze every holdings of your portfolio
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Our comprehensive guide will equip you with the tools and
                  insights needed to..
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more..
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
