import React from "react";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";

const Step4 = ({ setPage, setPpc_budget }) => {
  return (
    <div className=" min-h-screen relative w-full bg_home ">
      <div className=" absolute lg:hidden top-0 left-0 backdrop z-10"></div>
      <div className=" w-full relative z-20 pt-10 flex lg:hidden items-center justify-center">
      <div className=" line_verticla relative">
          <div className=" bg-pr w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 -left-3">
            1
          </div>
          <div style={{left:"55px"}} className=" bg-pr  w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 ">
            2
          </div>
          <div style={{left: "120px"}} className=" bg-pr  w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 ">
            3
          </div>
          <div style={{left:"188px"}} className=" bg-pr  w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 ">
            4
          </div>
          <div style={{left:"250px"}} className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4">
            5
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 py-28 lg:pl-60 gap-20 grid grid-cols-1 lg:grid-cols-3 pt-32 lg:pt-40">
        <div className=" hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 col-span-2 flex items-center gap-20">
          <div className="pr-0 px-2 lg:pr-16">
            <h1
              style={{ direction: "rtl" }}
              className="text-4xl lg:text-7xl  px-3 lg:px-0 font-bold text-center lg:text-right text-white"
            >
              מה התקציב שלך לשיווק קולקציית ה-NFT?
            </h1>

            <div className=" w-full grid px-4 lg:px-0 grid-cols-1 mt-12 lg:grid-cols-2 gap-x-7 gap-y-4 lg:gap-y-9 pl-4">
              <div
                onClick={() => {
                  setPpc_budget("₪25,000 - ₪50,000");
                  setPage(7);
                }}
                style={{ borderRadius: "50px" }}
                className=" px-8 cursor-pointer hover:bg-pr hover:text-white justify-center text-xl lg:text-2xl mt-1 py-3 lg:py-5 flex items-center font-normal  lg:font-semibold border-2 border-white   text-white  rounded-3xl"
              >
                ₪25,000 - ₪50,000
              </div>
              <div
                onClick={() => {
                  setPpc_budget("₪50,000 - ₪100,000");
                  setPage(7);
                }}
                style={{ borderRadius: "50px" }}
                className=" px-8 cursor-pointer hover:bg-pr hover:text-white justify-center text-xl lg:text-2xl mt-1 py-3 lg:py-5 flex items-center font-normal  lg:font-semibold border-2 border-white   text-white  rounded-3xl"
              >
                ₪50,000 - ₪100,000
              </div>
              <div
                onClick={() => {
                  setPpc_budget("₪100,000 - ₪250,000");
                  setPage(7);
                }}
                style={{ borderRadius: "50px" }}
                className=" px-8 cursor-pointer hover:bg-pr hover:text-white justify-center text-xl lg:text-2xl mt-1 py-3 lg:py-5 flex items-center font-normal  lg:font-semibold border-2 border-white   text-white  rounded-3xl"
              >
                ₪100,000 - ₪250,000
              </div>
              <div
                onClick={() => {
                  setPpc_budget("₪250,000 ומעלה");
                  setPage(7);
                }}
                style={{ borderRadius: "50px" }}
                className=" px-8 cursor-pointer hover:bg-pr hover:text-white justify-center text-xl lg:text-2xl mt-1 py-3 lg:py-5 flex items-center font-normal  lg:font-semibold border-2 border-white   text-white  rounded-3xl"
              >
                ₪250,000 ומעלה
              </div>
            </div>
          </div>
          <div className=" w-20 hidden lg:flex items-center justify-center">
            <div className=" line relative">
              <div className=" bg-pr w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-0 -left-7">
                1
              </div>
              <div
                style={{ top: "88px" }}
                className=" bg-pr   w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-20 -left-7"
              >
                2
              </div>
              <div
                style={{ top: "176px" }}
                className="  bg-pr   w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-20 -left-7"
              >
                3
              </div>
              <div
                style={{ top: "265px" }}
                className="  bg-pr   w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-20 -left-7"
              >
                4
              </div>
              <div
                style={{ top: "355px" }}
                className=" bg-black border border-white w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-light absolute top-64 -left-7"
              >
                5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 grid pt-10 pb-8  lg:pt-40 grid-cols-1 lg:grid-cols-3">
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
            onClick={() => setPage(5)}
            className=" w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
