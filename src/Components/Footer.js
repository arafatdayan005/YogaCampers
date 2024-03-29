import React, { useContext } from "react";
import icon from "./../Images/social.png";
import logo from "./../Images/yoga.png";
import logoDark from "./../Images/yoga-dark.png";
import { AuthContext } from "../Providers/AuthProviders";

function Footer() {
  const { dark } = useContext(AuthContext);
  return (
    <div className="bg-[#c1e3ad] dark:bg-emerald-900 py-12 ease-in duration-500">
      <div className="w-full flex justify-center">
        <div className="max-w-[90%]">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="col-span-2 text-black dark:text-white ">
              <div className="flex items-center ">
                <img src={dark ? logoDark : logo} className="w-24" alt="" />
                <div>
                  <p className="text-2xl text-center font-extrabold leading-none">
                    Yoga
                  </p>
                  <p className="text-3xl font-extrabold lead leading-none">
                    Campers
                  </p>
                </div>
              </div>
              <p>
                Unleash your inner strength, Discover the power within. Yoga: a
                journey of self-discovery.
              </p>
              <img src={icon} className="mt-4" alt="" />
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">About Us</h3>
              <p>Yoga</p>
              <p>Work</p>
              <p>Latest News</p>
              <p>Career</p>
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">Product</h3>
              <p>Prototype</p>
              <p>Plan & Pricing</p>
              <p>Customer</p>
              <p>Integration</p>
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">Support</h3>
              <p>Help Desk</p>
              <p>Sales</p>
              <p>Become a Partner</p>
              <p>Developers</p>
            </div>
            <div className="col-span-1 text-black dark:text-white ">
              <h3 className="mb-6 font-medium text-xl">Contact</h3>
              <p>524 Gulshan, Bangladesh</p>
              <p>+880 11111111</p>
            </div>
          </div>
          <hr className="border-t border-gray-950 dark:border-gray-100  border-opacity-40 my-8"></hr>
          <div className="flex justify-between text-gray-500">
            <p>@2023 YogaCampers. All Rights Reserved</p>
            <p>Powered by YogaCampers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
