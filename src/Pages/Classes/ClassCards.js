import React, { useEffect, useState } from "react";
import { getSelectedClass } from "../../API/class";

function ClassCards({ data, handleSelect, userEmail, role }) {
  const [studentEmail, setStudentEmail] = useState(null);
  const [reload, setReload] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { _id, image, name, instructor, price, seat, enrolled } = data;

  useEffect(() => {
    getSelectedClass(data._id, userEmail)
      .then((res) => res.json())
      .then((data) => setStudentEmail(data.studentEmail))
      .catch((err) => console.log(err));
  }, [reload, userEmail, data._id]);

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-once
      className="relative max-w-[370px] mx-auto"
    >
      <img className="h-64 w-full" src={image} alt="" />
      <div className="absolute z-10 p-4 rounded-lg text-center bg-white dark:bg-emerald-900 w-[80%] left-0 right-0 mx-auto -bottom-[50%] shadow-[0_0_25px_0_rgba(35,31,32,0.1)] duration-500">
        <p className="font-semibold text-2xl text-[#17543E] dark:text-white font-caudex">
          {name}
        </p>
        <p className="font-medium text-lg text-gray-600 dark:text-white">
          Trainer: {instructor.name}
        </p>
        <div className="flex justify-around my-2">
          <p className="text-lg text-gray-600 dark:text-white">
            Available Seat:{" "}
            <span className="text-[#D6A944] font-semibold">
              {seat - enrolled}
            </span>
          </p>
          <p className="text-lg text-gray-600 dark:text-white">
            Price:{" "}
            <span className="text-[#D6A944] font-semibold">${price}</span>
          </p>
        </div>
        <button
          onClick={() => {
            handleSelect(_id, name, image, price, instructor);
            setReload(!reload);
            setDisabled(true);
          }}
          className={`mx-auto border-2 border-[#D6A944] ${
            userEmail === studentEmail || disabled
              ? "bg-[#D6A944] hover:text-white duration-500"
              : "hover:bg-[#D6A944] hover:text-white duration-500"
          } px-6 py-2 rounded-full text-[#D6A944] disabled:cursor-not-allowed`}
          disabled={
            userEmail === studentEmail || disabled || role === "instructor"
          }
        >
          {(role && userEmail === studentEmail) || (role && disabled)
            ? "Selected"
            : "Select"}
        </button>
      </div>
    </div>
  );
}

export default ClassCards;
