import React from "react";
import { FiTrello } from "react-icons/fi";

export default function Experts() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#31245b]  px-16 py-12 lg:py-0  grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-5 grid place-content-center">
        <p className="text-white  text-md font-semibold ">WHY CHOOSE US</p>

        <h2 className="text-white text-3xl lg:text-6xl font-bold ">
          {"We're Experts In The Marketing Business !"}
        </h2>
        <p className="text-white  text-md font-semibold ">
          Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti,
          est arcu, felis, molestiae impedit vel felis eget.
        </p>

        <button className="bg-primary mt-6 text-sm text-white py-3 px-6 w-36 font-semibold  rounded-full">
          GET STARTED
        </button>
      </div>

      <div>
        <img
          src="/assets/homeImage/img_11.png"
          className=" rounded-2xl lg:-mt-[60px] mt-12 "
          alt=""
        />
      </div>
    </div>
  );
}
