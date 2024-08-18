import React from "react";
import trainer1 from "./../../Images/trainer1.png";
import trainer2 from "./../../Images/trainer2.jpg";
import trainer3 from "./../../Images/trainer3.png";
import trainer4 from "./../../Images/trainer4.jpg";
import trainer5 from "./../../Images/trainer5.jpg";
import trainer6 from "./../../Images/trainer6.jpg";

const Trainers = () => {
  return (
    <section className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16">
      <h3
        className="text-2xl  text-[#D6A944] text-center font-caudex"
        data-aos="zoom-in"
        data-aos-once
      >
        Trainers
      </h3>
      <h1
        className="mt-4 mb-6 text-4xl lg:text-5xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-once
      >
        Our Expert Instructors
      </h1>

      <div className="pt-5 lg:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        <div
          className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)] max-w-[300px] lg:max-w-full mx-auto h-full"
          data-aos="fade-up-right"
          data-aos-delay="500"
          data-aos-once
        >
          <img
            className="rounded-t-lg w-[300px] h-[250px] lg:h-[350px] lg:w-[400px]"
            src={trainer1}
            alt=""
          />
          <div className="p-5 lg:p-10">
            <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Charlie Warner
            </p>
            <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway lg:text-lg text-center">
              Meditation Trainer
            </p>
            <button className="text-xl text-[#D6A944] text-center font-caudex mx-auto flex justify-center">
              Contact Info
            </button>
          </div>
        </div>
        <div
          className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)] max-w-[300px] lg:max-w-full mx-auto h-full"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once
        >
          <img
            className="rounded-t-lg w-[300px] h-[250px] lg:h-[350px] lg:w-[400px]"
            src={trainer2}
            alt=""
          />
          <div className="p-5 lg:p-10">
            <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Jack Husk
            </p>
            <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway lg:text-lg text-center">
              Yoga Trainer
            </p>
            <button className="text-xl text-[#D6A944] text-center font-caudex mx-auto flex justify-center">
              Contact Info
            </button>
          </div>
        </div>
        <div
          className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)] max-w-[300px] lg:max-w-full mx-auto h-full"
          data-aos="fade-up-left"
          data-aos-delay="500"
          data-aos-once
        >
          <img
            className="rounded-t-lg w-[300px] h-[250px] lg:h-[350px] lg:w-[400px]"
            src={trainer3}
            alt=""
          />
          <div className="p-5 lg:p-10">
            <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Emily Dawson
            </p>
            <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway lg:text-lg text-center">
              Yoga Trainer
            </p>
            <button className="text-xl text-[#D6A944] text-center font-caudex mx-auto flex justify-center">
              Contact Info
            </button>
          </div>
        </div>
        <div
          className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)] max-w-[300px] lg:max-w-full mx-auto h-full"
          data-aos="fade-up-right"
          data-aos-once
        >
          <img
            className="rounded-t-lg w-[300px] h-[250px] lg:h-[350px] lg:w-[400px]"
            src={trainer4}
            alt=""
          />
          <div className="p-5 lg:p-10">
            <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Jason Walker
            </p>
            <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway lg:text-lg text-center">
              Fitness Trainer
            </p>
            <button className="text-xl text-[#D6A944] text-center font-caudex mx-auto flex justify-center">
              Contact Info
            </button>
          </div>
        </div>
        <div
          className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)] max-w-[300px] lg:max-w-full mx-auto h-full"
          data-aos="fade-up"
          data-aos-once
        >
          <img
            className="rounded-t-lg w-[300px] h-[250px] lg:h-[350px] lg:w-[400px]"
            src={trainer5}
            alt=""
          />
          <div className="p-5 lg:p-10">
            <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Emma Foster
            </p>
            <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway lg:text-lg text-center">
              Meditation trainer
            </p>
            <button className="text-xl text-[#D6A944] text-center font-caudex mx-auto flex justify-center">
              Contact Info
            </button>
          </div>
        </div>
        <div
          className="rounded-lg bg-white dark:bg-teal-950 shadow-[0_0_50px_0_rgba(35,31,32,0.1)] max-w-[300px] lg:max-w-full mx-auto h-full"
          data-aos="fade-up-left"
          data-aos-once
        >
          <img
            className="rounded-t-lg w-[300px] h-[250px] lg:h-[350px] lg:w-[400px]"
            src={trainer6}
            alt=""
          />
          <div className="p-5 lg:p-10">
            <p className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center">
              Yung Jacob
            </p>
            <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway lg:text-lg text-center">
              Fitness Trainer
            </p>
            <button className="text-xl text-[#D6A944] text-center font-caudex mx-auto flex justify-center">
              Contact Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
