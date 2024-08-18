import { Link } from "react-router-dom";
import img from "./../../Images/about.png";

function About() {
  return (
    <div className="py-20 lg:py-40 px-5 md:px-0">
      <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <img
            className="h-64 md:h-80 lg:h-full max-h-[420px]"
            src={img}
            alt=""
          />
          <div>
            <h3
              className="text-2xl text-[#D6A944] text-center md:text-left font-caudex"
              data-aos="fade-up"
              data-aos-once
            >
              About Us
            </h3>
            <h1
              className="mt-4 mb-6 text-4xl lg:text-5xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once
            >
              How We Started
            </h1>
            <p className="text-[#555F5B] dark:text-[#D9D9D9] duration-500 text-center font-raleway md:text-left lg:text-lg">
              Born from a profound love for yoga, our journey is one of passion,
              growth, and unwavering commitment to fostering health and
              happiness. Grounded in inclusivity and guided by experienced
              instructors, we're dedicated to making yoga accessible to all.
            </p>
            <Link
              to="/about"
              className="w-fit px-4 py-2 md:px-8 md:py-4 mt-4 md:mt-8 border-2 border-[#D6A944] text-[#D6A944] font-medium md:font-semibold rounded-full hover:bg-[#D6A944] duration-500 hover:text-white flex mx-auto md:mr-auto md:ml-0"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-once
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
