import { Link } from "react-router-dom";
import img from "./../../Images/goals.png";
import CountUp from "react-countup";

function Goals() {
  return (
    <div className="py-20 lg:py-40 px-5 md:px-0">
      <div className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <h3
              className="text-2xl text-[#D6A944] text-center md:text-left font-caudex"
              data-aos="fade-up"
              data-aos-once
            >
              Our Goals
            </h3>
            <h1
              className=" w-full my-6 text-3xl lg:text-6xl text-[#17543E] dark:text-white duration-500 font-semibold font-caudex text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once
            >
              Why We Are Better
            </h1>
            <p className="text-[#555F5B] dark:text-[#D9D9D9] duration-500 text-center font-raleway md:text-left lg:text-lg">
              With yogacampers you will be in touch with hundreds of
              professional and personal yoga trainers waiting for you to make
              diet and daily workout routine for the betterment of your body and
              your soul. Our yoga classes are categorized by various types of
              people so you can make the most out of it!
            </p>
            <Link
              to="/classes"
              className="w-fit px-4 py-2 md:px-8 md:py-4 mt-8 md:mt-8 border-2 border-[#D6A944] text-[#D6A944] font-medium md:font-semibold rounded-full hover:bg-[#D6A944] duration-500 hover:text-white flex mx-auto md:mr-auto md:ml-0"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-once
            >
              Join Us
            </Link>
          </div>
          <div className="md:min-w-[55%]">
            <img
              className="h-64 md:h-80 lg:h-96 xl:h-full mx-auto"
              src={img}
              alt=""
            />
            <div className="flex flex-wrap gap-3 lg:flex-nowrap lg:gap-0 justify-between items-center mt-10">
              <div data-aos="zoom-out" data-aos-delay="300" data-aos-once>
                <p className="text-2xl lg:text-5xl font-caudex text-[#D6A944] font-semibold">
                  <CountUp
                    delay={0}
                    end={60}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce={true}
                  />
                  +
                </p>
                <p className="mt-4 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway text-left lg:text-lg">
                  Yoga Workout <br /> Styles
                </p>
              </div>
              <div data-aos="zoom-out" data-aos-delay="300" data-aos-once>
                <p className="text-2xl lg:text-5xl font-caudex text-[#D6A944] font-semibold">
                  <CountUp
                    delay={0}
                    end={100}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce={true}
                  />
                  +
                </p>
                <p className="mt-4 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway text-left lg:text-lg">
                  Professional <br /> Trainers
                </p>
              </div>
              <div data-aos="zoom-out" data-aos-delay="300" data-aos-once>
                <p className="text-2xl lg:text-5xl font-caudex text-[#D6A944] font-semibold">
                  <CountUp
                    delay={0}
                    end={8}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce={true}
                  />
                  +
                </p>
                <p className="mt-4 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway text-left lg:text-lg">
                  Year <br /> Experience
                </p>
              </div>
              <div data-aos="zoom-out" data-aos-delay="300" data-aos-once>
                <p className="text-2xl lg:text-5xl font-caudex text-[#D6A944] font-semibold">
                  <CountUp
                    delay={0}
                    end={90}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce={true}
                  />
                  %
                </p>
                <p className="mt-4 text-[#555F5B] dark:text-[#D9D9D9] duration-500 font-raleway text-left lg:text-lg">
                  Happy <br /> Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
