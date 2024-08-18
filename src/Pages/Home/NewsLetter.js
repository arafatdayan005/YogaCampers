import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-20">
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
  );
};

export default NewsLetter;
