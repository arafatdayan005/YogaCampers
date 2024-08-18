import React from "react";
import blogs1 from "./../../Images/blogs1.jpg";
import blogs2 from "./../../Images/blogs2.jpg";
import blogs3 from "./../../Images/blogs3.jpg";

function Blogs() {
  return (
    <div className="relative py-20 lg:py-40 px-5 md:px-0 bg-gradient-to-b from-[#c1e3ad] dark:from-emerald-900 to-white dark:to-teal-950 duration-500">
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
          Blogs
        </h3>
        <h1
          className="mt-4 mb-6 text-4xl lg:text-5xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once
        >
          Latest Articles
        </h1>

        <div className="pt-5 lg:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          <div className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)]">
            <img className="rounded-t-lg" src={blogs1} alt="" />
            <div className="p-5 lg:p-10">
              <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex">
                Have a Good Body and Soul Balance in…
              </p>
              <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway text-left lg:text-lg">
                Human body needs physical excercise and stretching every
                morning...
              </p>
              <button className="text-xl text-[#D6A944] text-center font-caudex">
                Read more
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)]">
            <img className="rounded-t-lg" src={blogs2} alt="" />
            <div className="p-5 lg:p-10">
              <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex">
                Yoga Tips : How to Keep Yoga When…
              </p>
              <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway text-left lg:text-lg">
                Some yoga position is hard to catch up and some of them are...
              </p>
              <button className="text-xl text-[#D6A944] text-center font-caudex">
                Read more
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)]">
            <img className="rounded-t-lg" src={blogs3} alt="" />
            <div className="p-5 lg:p-10">
              <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex">
                Yoga Tips : The Yoga of Food and…
              </p>
              <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway text-left lg:text-lg">
                To maintain diet and get nutritions you need to pick the food
                item…
              </p>
              <button className="text-xl text-[#D6A944] text-center font-caudex">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
