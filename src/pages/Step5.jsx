import React from "react";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Step5 = ({ setPage }) => {
  return (
    <div className=" min-h-screen overflow-x-hidden w-full relative bg_home ">
         <div className=" absolute lg:hidden top-0 left-0 backdrop z-10"></div>
      <div className=" w-full relative  z-20 pt-10 flex lg:hidden items-center justify-center">
        <div className=" line_verticla relative">
          <div className=" bg-pr w-9 h-9 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 -left-3">
            1
          </div>
          <div
            style={{ left: "40px" }}
            className=" bg-pr font-bold   w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute -top-4 "
          >
            2
          </div>
          <div
            style={{ left: "91px" }}
            className=" bg-pr font-bold   w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute -top-4 "
          >
            3
          </div>
          <div
            style={{ left: "145px" }}
            className=" bg-pr font-bold  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl absolute -top-4 "
          >
            4
          </div>
          <div
            style={{ left: "200px" }}
            className=" bg-pr font-bold  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute -top-4"
          >
            5
          </div>
        </div>
      </div>
      <div className=" w-full py-28 relative z-20 gap-96 grid grid-cols-1 lg:grid-cols-3 pt-40 lg:pt-60">
        <div className=" hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 col-span-2 flex items-center gap-2">
          <div className=" pr-12 lg:pr-16">
            <h1
              style={{ direction: "rtl" }}
              className="lg:text-7xl text-5xl font-bold text-right text-white"
            >
              שלב אחרון!
            </h1>
            <div className="flex items-center pt-5">
              <p
                style={{ direction: "rtl" }}
                className=" text-white text-lg font-bold text-right"
              >
                כל שנותר לנו הוא לשוחח בטלפון ולקבוע בפגישה במשרדי החברה שלנו.
              </p>
            </div>
            <input
              type="text"
              placeholder="שם מלא…"
              style={{ direction: "rtl" }}
              className="border border-white text-white mx-3 w-full outline-none py-3 px-2 rounded-3xl mt-4 bg-transparent"
            />
            <input
              type="text"
              placeholder="שם מלא…"
              style={{ direction: "rtl" }}
              className="border border-white  text-white mx-3 w-full outline-none py-3 px-2 rounded-3xl mt-4 bg-transparent"
            />

            <div className=" w-full flex items-center justify-end mt-3">
              <button
                onClick={() => setPage(8)}
                className=" mt-3 px-9 hover:bg-pr  bg-transparent text-2xl py-2 flex items-center  font-bold border border-white hover:text-black  text-white  rounded-3xl"
              >
                   <div className="flex items-center text-white hover:text-black pt-1">
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft />
              </div>
                צרו איתי קשר
              </button>
            </div>
          </div>
          <div className=" w-20  items-center justify-center hidden lg:flex">
            <div className=" line relative">
              <div className=" bg-pr w-9 h-9 rounded-full flex items-center justify-center text-black text-xl font-bold absolute top-0 -left-4">
                1
              </div>
              <div className=" bg-pr font-bold  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute top-16 -left-4">
                2
              </div>
              <div className=" bg-pr font-bold  border-white  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute top-32 -left-4">
                3
              </div>
              <div className=" bg-pr font-bold  border-white  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute top-48 -left-4">
                4
              </div>
              <div className=" bg-pr font-bold  border-white  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute top-64 -left-4">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full grid relative z-20 pt-20 pb-8 lg:pb-0 lg:pt-32 grid-cols-1 lg:grid-cols-3">
        <div> </div>
        <div className="flex items-center justify-center ">
          <div className=" h-5">
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt=""
            />
          </div>
        </div>
        <div className=" hidden lg:flex items-center justify-end text-white pr-6">
          <CgArrowLongRight
            onClick={() => setPage(6)}
            className=" w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step5;
