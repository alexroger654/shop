import React from "react";
import { FiTrello } from "react-icons/fi";

//=================== component ========================

export default function About() {
  //===================== render ==========================
  return (
    <section className="w-full bg-white py-24 px-4 lg:px-0 ">
      <div className="max-w-6xl mx-auto bg-[#31245b]  px-16 py-20 lg:py-0 rounded-3xl  grid grid-cols-1 lg:grid-cols-4">
        <div className="space-y-5 grid place-content-center">
          <p className="text-white  text-md font-semibold ">WHY CHOOSE US</p>

          <h2 className="text-white  text-4xl font-bold ">
            Our Goals & Benefits
          </h2>

          <button className="bg-primary text-sm text-white py-3 px-6 w-36 font-semibold  rounded-full ">
            GET STARTED
          </button>
        </div>

        {/* cards =========== */}

        <div className=" space-y-3 w-full py-14 ">
          <div className="bg-white mx-auto rounded-2xl w-28 h-28 text-muted flex items-center justify-center text-6xl ">
            <FiTrello />
          </div>
          <p className="text-white text-center  text-2xl font-semibold ">
            Digital Marketing
          </p>
          <p className="text-white text-center  text-md  ">
            Cras fusce commodo litora nisl viverra ipsam.
          </p>
        </div>
        {/* cards =========== */}

        <div className=" space-y-3 w-full  py-14  bg-primary rounded-b-3xl mb-20  ">
          <div className="bg-white mx-auto rounded-2xl w-28 h-28 text-muted flex items-center justify-center text-6xl ">
            <FiTrello />
          </div>
          <p className="text-white text-center  text-2xl font-semibold ">
            Digital Marketing
          </p>
          <p className="text-white text-center  text-md  ">
            Cras fusce commodo litora nisl viverra ipsam.
          </p>
        </div>
        {/* cards =========== */}

        <div className=" space-y-3 w-full py-14 ">
          <div className="bg-white mx-auto rounded-2xl w-28 h-28 text-muted flex items-center justify-center text-6xl ">
            <FiTrello />
          </div>
          <p className="text-white text-center  text-2xl font-semibold ">
            Digital Marketing
          </p>
          <p className="text-white text-center  text-md  ">
            Cras fusce commodo litora nisl viverra ipsam.
          </p>
        </div>
      </div>
    </section>
  );
}
