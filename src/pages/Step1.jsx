import React from "react";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
const Step1 = ({ setPage }) => {
  return (
    <div className=" min-h-screen w-full bg_home relative">
      <div className=" absolute lg:hidden top-0 left-0 backdrop z-10"></div>
      <div className=" w-full relative z-20 pt-10 flex lg:hidden items-center justify-center">
        <div className=" line_verticla relative">
          <div className=" bg-pr w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 -left-3">
            1
          </div>
          <div style={{left:"55px"}} className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 ">
            2
          </div>
          <div style={{left: "120px"}} className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 ">
            3
          </div>
          <div style={{left:"188px"}} className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 ">
            4
          </div>
          <div style={{left:"250px"}} className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4">
            5
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 py-16 gap-96 grid grid-cols-1 lg:grid-cols-3 pt-52 lg:pt-72">
        <div className="hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 lg:col-span-2 flex items-center justify-end gap-2">
          <div className=" pr-0 lg:pr-16">
            <h1
              style={{ direction: "rtl", lineHeight:"85px" }}
              className="lg:text-7xl text-4xl hidden lg:block text-center font-bold  w-full lg:text-right text-white"
            >
              יש לך את הרעיון <br /> לקולקצייה הבאה?
            </h1>
            <h1
              style={{ direction: "rtl", lineHeight:"40px" }}
              className="lg:text-7xl text-4xl block lg:hidden text-center font-bold  w-full lg:text-right text-white"
            >
              יש לך את הרעיון  לקולקצייה <br /> הבאה?
            </h1>
            <div className=" w-full lg:gap-8 gap-3 flex items-center justify-center lg:justify-end mt-9">
              <button
                onClick={() => setPage(3)}
                style={{borderRadius:"50px"}}
                className=" px-16 hover:bg-red-600 hover:text-white text-xl lg:text-3xl mt-1 py-3 lg:py-6 flex items-center   font-bold border-2 border-white   text-white  rounded-3xl"
              >
                לא
              </button>
              <button
                onClick={() => setPage(4)}
                style={{borderRadius:"50px"}}
                className=" px-16 hover:bg-pr bg-transparent text-xl lg:text-3xl mt-1 py-3 lg:py-6 flex items-center   font-bold border-2 border-white hover:text-black  text-white  rounded-3xl"
              >
                כן
              </button>
            </div>
          </div>
          <div className=" w-20 hidden lg:flex items-center justify-center">
            <div className=" line relative">
              <div className=" bg-pr w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-0 -left-7">
                1
              </div>
              <div style={{top:"88px"}} className=" bg-black border border-white w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-light absolute top-20 -left-7">
                2
              </div>
              <div style={{top:"176px"}} className=" bg-black border border-white w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-light absolute top-44 -left-7">
                3
              </div>
              <div style={{top:"265px"}} className=" bg-black border border-white w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-light absolute  -left-7">
                4
              </div>
              <div style={{top:"355px"}} className=" bg-black border border-white w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-light absolute top-64 -left-7">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 grid pt-52 pb-8 lg:pb-0 lg:pt-60 grid-cols-1 lg:grid-cols-3">
        <div className=" hidden lg:block"> </div>
        <div className="flex items-center justify-center w-full">
          <div className=" h-6">
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt=""
            />
          </div>
        </div>
        <div className="  items-center hidden lg:flex justify-end text-white pr-16">
          <CgArrowLongRight
            onClick={() => setPage(1)}
            className=" w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
