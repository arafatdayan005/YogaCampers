import React from "react";
import offer1 from "./../../Images/offer1.png";
import offer2 from "./../../Images/offer2.png";
import offer3 from "./../../Images/offer3.png";
import offer4 from "./../../Images/offer4.png";
import offer5 from "./../../Images/offer5.png";
import offer6 from "./../../Images/offer6.png";

function Services() {
  return (
    <div className="relative py-20 lg:py-40 px-5 md:px-0 bg-gradient-to-br from-[#c1e3ad] dark:from-emerald-900 to-white dark:to-teal-950 duration-500">
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(125%+1.3px)] h-24"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="fill-white dark:fill-teal-950 duration-500"
          ></path>
        </svg>
      </div>
      <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto my-5">
        <h3
          className="text-2xl text-[#D6A944] text-center font-caudex"
          data-aos="fade-up"
          data-aos-once
        >
          Services
        </h3>
        <h1
          className="mt-4 mb-6 text-4xl lg:text-5xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once
        >
          What We Offer To You
        </h1>

        <div className="pt-5 lg:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          <div
            className="flex flex-col justify-center items-center gap-3 lg:gap-6"
            data-aos="fade-up-right"
            data-aos-delay="300"
            data-aos-once
          >
            <img src={offer1} alt="" />
            <p className="text-lg lg:text-2xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Flexibel Time
            </p>
            <p className="text-xl text-gray-600 dark:text-white text-center">
              Get a personalize routine and spend workout time regularly
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-3 lg:gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once
          >
            <img src={offer2} alt="" />
            <p className="text-lg lg:text-2xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Reduce Stress
            </p>
            <p className="text-xl text-gray-600 dark:text-white text-center">
              After a heavy load of work day, time to release your stress
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-3 lg:gap-6"
            data-aos="fade-up-left"
            data-aos-delay="300"
            data-aos-once
          >
            <img src={offer3} alt="" />
            <p className="text-lg lg:text-2xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Many Yoga Styles
            </p>
            <p className="text-xl text-gray-600 dark:text-white text-center">
              From our trainer you have hundred of yoga styles to choose
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-3 lg:gap-6"
            data-aos="fade-up-right"
            data-aos-delay="300"
            data-aos-once
          >
            <img src={offer4} alt="" />
            <p className="text-lg lg:text-2xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Life Balancing
            </p>
            <p className="text-xl text-gray-600 dark:text-white text-center">
              Keep your life organized by balancing your daily task &
              surrundings
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-3 lg:gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once
          >
            <img src={offer5} alt="" />
            <p className="text-lg lg:text-2xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Health Tips
            </p>
            <p className="text-xl text-gray-600 dark:text-white text-center">
              Always be healthy and fit by following our diet and excersize
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-4 lg:gap-6"
            data-aos="fade-up-left"
            data-aos-delay="300"
            data-aos-once
          >
            <img className="mt-3" src={offer6} alt="" />
            <p className="text-lg lg:text-2xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Life Consultation
            </p>
            <p className="text-xl text-gray-600 dark:text-white text-center">
              Join our consultation to maintain your mental peace of mind
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(125%+1.3px)] h-24"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="fill-white dark:fill-teal-950 duration-500"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Services;
