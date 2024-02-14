import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import slider1 from "./../../Images/slider1.jpg";
import slider2 from "./../../Images/slider2.jpg";
import slider3 from "./../../Images/slider3.jpg";

function Slider() {
  const slides = [
    <div
      key="slide1"
      style={{
        backgroundImage: `url(${slider1})`,
      }}
      className="min-w-full bg-center bg-cover"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#000000c0] to-[#00000000]">
        <div className="h-full w-full flex flex-col items-start justify-center pl-8 md:pl-20">
          <p className="text-white text-xl md:text-3xl xl:text-6xl  font-semibold">
            This Summer <br /> Purify Your Soul With <br />
            <span className="text-[#6fc826] font-extrabold text-3xl md:text-5xl xl:text-7xl tracking-tight">
              YogaCampers
            </span>
          </p>
          <button className="px-4 py-2 md:px-8 md:py-4 mt-4 md:mt-8 bg-[#6fc826] text-white font-semibold md:font-bold rounded-full hover:bg-[#60b31d]">
            Join Us
          </button>
        </div>
      </div>
    </div>,
    <div
      key="slide2"
      style={{
        backgroundImage: `url(${slider2})`,
      }}
      className="min-w-full bg-center bg-cover"
    >
      <div className="h-full flex justify-between bg-gradient-to-r from-[#000000c0] to-[#00000000]">
        <div className="h-full w-full flex flex-col items-start justify-center pl-8 md:pl-20">
          <p className="text-white text-xl md:text-3xl xl:text-6xl  font-semibold">
            Learn Yoga <br /> With our skilled <br />{" "}
            <span className="text-[#6fc826] font-extrabold text-3xl md:text-5xl xl:text-7xl tracking-tight">
              50+
            </span>{" "}
            Instructors
          </p>
          <button className="px-4 py-2 md:px-8 md:py-4 mt-4 md:mt-8 bg-[#6fc826] text-white font-semibold md:font-bold rounded-full hover:bg-[#60b31d]">
            Start Yoga
          </button>
        </div>
      </div>
    </div>,
    <div
      key="slide3"
      style={{
        backgroundImage: `url(${slider3})`,
      }}
      className="min-w-full bg-center bg-cover"
    >
      <div className="h-full flex justify-between bg-gradient-to-r from-[#000000c0] to-[#00000000]">
        <div className="h-full w-full flex flex-col items-start justify-center pl-8 md:pl-20">
          <p className="text-white text-xl md:text-3xl xl:text-6xl  font-semibold">
            Enroll Our Special <br /> Classes made only <br /> For
            <span className="text-[#6fc826] font-extrabold text-3xl md:text-5xl xl:text-7xl tracking-tight">
              {" "}
              Kids
            </span>
          </p>
          <button className="px-4 py-2 md:px-8 md:py-4 mt-4 md:mt-8 bg-[#6fc826] text-white font-semibold md:font-bold rounded-full hover:bg-[#60b31d]">
            Book Now
          </button>
        </div>
      </div>
    </div>,
  ];

  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const goToSlide = (slideIndex) => setCurr(slideIndex);

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  });

  return (
    <section className="overflow-hidden relative">
      <div
        className="flex h-[40vh] sm:h-[60vh] xl:h-[90vh] bg-black transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 md:p-2 text-lg md:text-2xl rounded-full bg-white/50 text-white hover:bg-white/80"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={next}
          className="p-1 md:p-2 text-lg md:text-2xl rounded-full bg-white/50 text-white hover:bg-white/80"
        >
          <FaAngleRight />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
              transition-all h-1.5 md:h-3 w-1.5 md:w-3   bg-white rounded-full cursor-pointer
              ${curr === i ? "p-1 md:p-2" : "bg-opacity-50 hover:bg-opacity-80"}
            `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
