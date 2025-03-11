import Link from "next/link";
import React from "react";
import { FiPlay } from "react-icons/fi";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { HowToWorkVideoModal } from "./HowToWorkVideoModal";

export default function Hero() {
  return (
    <section className="bg-accent-foreground w-full  ">
      <div className="max-w-screen-2xl mx-auto h-screen  lg:max-h-[700px] grid grid-cols-1 lg:grid-cols-3 lg:pt-36 pt-16">
        <div className="relative">
          <img src="/assets/homeImage/img_01.png" className="h-[80%] hidden lg:block" alt="" />
          <img
            src="/assets/homeImage/img_04.png"
            className="absolute -top-16 right-1 hidden lg:block "
            alt=""
          />
        </div>

        <div>
          <p className="text-center text-primary text-md font-semibold ">
            SOCIAL MEDIA MARKETING
          </p>

          <h1 className="text-3xl lg:text-6xl text-gray-900 text-center font-extrabold  ">
            AI Driven Real, Organic Followers
          </h1>
          <p className="text-center text-sm lg:text-lg mt-4 lg:mt-8 font-semibold text-muted">
            Authentic growth with AI: No bots, no fake users. Grow your IG community with real, targeted followers.
          </p>

          <div className="mt-8 flex items-center justify-center space-x-6">
            <Link href='/sign_in' className="bg-primary text-xs text-white px-4 py-3 lg:py-4 lg:px-8 font-semibold  rounded-full">
              GET STARTED
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer ">
                  <div className="border-2 flex items-center justify-center text-lg text-gray-900 border-[#31245b] rounded-full h-10 w-10">
                    <FiPlay />
                  </div>
                  <p className="text-sm font-bold text-gray-900">HOW WE WORKS</p>
                </div>
              </DialogTrigger>
              <HowToWorkVideoModal />
            </Dialog>

          </div>
        </div>
        <div className="relative">
          <img src="/assets/homeImage/img_02.png" className="h-[80%] mx-auto " alt="" />
          <img
            src="/assets/homeImage/img_05.png"
            className="absolute -top-16 right-1 hidden lg:block"
            alt=""
          />
        </div>
      </div>

    </section>
  );
}
