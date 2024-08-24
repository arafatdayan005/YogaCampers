import React from "react";
import { FaAt, FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-5 py-16">
        <h3
          className="text-2xl text-[#D6A944] text-center font-caudex"
          data-aos="zoom-in"
          data-aos-once
        >
          Contact
        </h3>
        <h1
          className="mt-4 mb-6 text-4xl lg:text-5xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-once
        >
          Get in Touch
        </h1>

        <div className="my-6 lg:my-16 flex flex-col lg:flex-row justify-center shadow-[0_0_30px_10px_rgba(35,31,32,0.1)] rounded-2xl">
          <div className="p-5 lg:p-10 lg:max-w-min bg-white dark:bg-emerald-800">
            <h3 className="text-2xl text-[#D6A944] text-center lg:text-left font-caudex">
              Address
            </h3>
            <h1 className="mt-3 text-3xl lg:text-4xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center lg:text-left">
              Come Visit Us
            </h1>
            <p className="my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 text-center font-raleway md:text-left lg:text-lg max-w-fit">
              We are open from Sunday-Thursday (8pm - 10pm) eveeryday at our
              office location
            </p>
            <div className="space-y-5 mb-8 lg:mb-12">
              <p className="flex justify-start items-center gap-3 text-[#555F5B] dark:text-[#D9D9D9] duration-500 text-center font-raleway md:text-left lg:text-lg">
                <span className="text-[#D6A944]">
                  <FaPhone />
                </span>
                (0362) 26294
              </p>
              <p className="flex justify-start items-center gap-3 text-[#555F5B] dark:text-[#D9D9D9] duration-500 text-center font-raleway md:text-left lg:text-lg">
                <span className="text-[#D6A944]">
                  <FaLocationDot />
                </span>
                52 street, Mirpur, Dhaka, Bangladesh
              </p>
              <p className="flex justify-start items-center gap-3 text-[#555F5B] dark:text-[#D9D9D9] duration-500 text-center font-raleway md:text-left lg:text-lg">
                <span className="text-[#D6A944]">
                  <FaAt />
                </span>
                support@yogacampers.com
              </p>
            </div>
            <iframe
            className="w-full md:w-[400px]"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6141.125843769092!2d90.412270966772!3d23.763946155792844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77cefe12cf1%3A0x3daa54c4e8e85b5!2sYoga%20Bliss!5e0!3m2!1sen!2sbd!4v1724513124907!5m2!1sen!2sbd"
              height="300"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex-1 w-full min-h-full bg-[#c1e3ad] dark:bg-emerald-900 p-10 lg:p-20">
            <h1
              className="text-xl lg:text-3xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-once
            >
              Send Us Your Message
            </h1>
            <p className="my-3 lg:my-5 text-[#555F5B] dark:text-[#D9D9D9] duration-500 text-center font-raleway lg:text-lg lg:max-w-[70%] mx-auto">
              For any inquery, submit the form to email us. We are active 24/7
              to assist you.
            </p>
            <div className="mt-8 lg:mt-12 space-y-5 lg:space-y-8">
              <input
                type="text"
                name="email"
                className="py-3 px-6 bg-white rounded-lg border-none text-white max-lg:text-center placeholder:text-[#555F5B] focus:outline-none focus:ring-none flex-1 w-full lg:w-full lg:py-4 lg:px-8"
                placeholder="Enter your email"
              />
              <input
                type="text"
                name="subject"
                className="py-3 px-6 bg-white rounded-lg border-none text-white max-lg:text-center placeholder:text-[#555F5B] focus:outline-none focus:ring-none flex-1 w-full lg:w-full lg:py-4 lg:px-8"
                placeholder="Your Subject"
              />
              <textarea
                className="py-3 px-6 bg-white rounded-lg border-none text-white max-lg:text-center placeholder:text-[#555F5B] focus:outline-none focus:ring-none flex-1 w-full lg:w-full lg:py-4 lg:px-8"
                name="body"
                rows="5"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="flex justify-center items-center mx-auto py-4 px-10 text-sm bg-[#D6A944] shadow-md rounded-full text-white font-semibold duration-500 hover:scale-110"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#c1e3ad] dark:bg-emerald-900 rounded-2xl p-8 xl:p-20 duration-500">
            <h2 className="font-manrope text-4xl text-[#17543E] dark:text-[#D6A944] font-caudex text-center font-bold mb-4">
              Subscribe Our Newsletter
            </h2>
            <p className="font-raleway text-[#555F5B] dark:text-[#D9D9D9] text-center mb-10 max-lg:max-w-2xl mx-auto">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It`s quick, easy, and free
            </p>
            <div className="max-w-md mx-auto lg:bg-white lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                className="py-2 px-6 bg-transparent rounded-full border-none text-white max-lg:text-center placeholder:text-[#555F5B] focus:outline-none focus:ring-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="py-2 px-5 text-sm bg-[#D6A944] shadow-md rounded-full text-white font-semibold hover:bg-[#bb953d] duration-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
