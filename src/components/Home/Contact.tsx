import React from "react";
import { FiTrello } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#31245b] px-4 lg:px-24  py-24 gap-20  grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-5 grid place-content-center">
        <p className="text-white  text-md font-semibold ">WHY CHOOSE US</p>

        <h2 className="text-white text-3xl lg:text-4xl font-bold ">
          {"We're Experts In The Marketing Business !"}
        </h2>
        <p className="text-white  text-md font-semibold ">
          Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti,
          est arcu, felis, molestiae impedit vel felis eget.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            className="bg-white rounded-full px-4 py-5"
            placeholder="Your Name ..."
          />
          <input
            type="text"
            className="bg-white rounded-full px-4 py-5"
            placeholder="Your Email ..."
          />
          <textarea
            rows={4}
            name=""
            id=""
            className="bg-white rounded-xl px-4 py-5  col-span-full"
            placeholder="Message ... "
          />
        </div>

        <button className="bg-white mt-6 text-sm text-primary py-3 lg:py-5 lg:px-6 w-48 font-semibold  rounded-full">
          GET STARTED
        </button>
      </div>

      <div>
        <img
          src="/assets/homeImage/img_12.png"
          className=" rounded-2xl -mt-[60px]"
          alt=""
        />
      </div>
    </div>
  );
}
