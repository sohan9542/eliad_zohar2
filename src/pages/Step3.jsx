import React from "react";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
const Step3 = ({ setPage }) => {
  return (
    <div className=" min-h-screen relative w-full bg_home ">
       <div className=" absolute lg:hidden top-0 left-0 backdrop z-10"></div>
      <div className=" w-full relative z-20 pt-10 flex lg:hidden items-center justify-center">
        <div className=" line_verticla relative">
          <div className=" bg-pr w-9 h-9 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 -left-3">
            1
          </div>
          <div style={{left:"40px"}} className=" bg-pr font-bold   w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute -top-4 ">
            2
          </div>
          <div style={{left: "91px"}} className=" bg-pr font-bold   w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute -top-4 ">
            3
          </div>
          <div style={{left:"145px"}} className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 ">
            4
          </div>
          <div style={{left:"200px"}} className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4">
            5
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 py-28 gap-20 grid grid-cols-1 lg:grid-cols-3 pt-40 lg:pt-60">
        <div className=" hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 col-span-2 flex items-center gap-2">
          <div className="pr-0 px-2 lg:pr-16">
            <h1
              style={{ direction: "rtl" }}
              className="text-4xl lg:text-7xl  font-bold text-center lg:text-right text-white"
            >
              מה התקציה שלך לפיתוח והקמת קולקציית ה-NFT?
            </h1>

            <div className=" w-full grid px-4 lg:px-0 grid-cols-1 mt-8 lg:grid-cols-2 gap-5 pl-4 lg:pl-16">
              <div
                onClick={() => setPage(6)}
                className=" mt-3 w-full font-light cursor-pointer justify-center hover:bg-pr bg-transparent text-lg py-3 flex items-center  border border-white hover:text-black  text-white  rounded-3xl"
              >
                ₪25,000 - ₪50,000
              </div>
              <div
                onClick={() => setPage(6)}
                className=" mt-3 w-full font-light cursor-pointer justify-center hover:bg-pr bg-transparent text-lg py-3 flex items-center  border border-white hover:text-black  text-white  rounded-3xl"
              >
                ₪50,000 - ₪100,000
              </div>
              <div
                onClick={() => setPage(6)}
                className=" mt-3 w-full font-light cursor-pointer justify-center hover:bg-pr bg-transparent text-lg py-3 flex items-center  border border-white hover:text-black  text-white  rounded-3xl"
              >
                ₪100,000 - ₪250,000
              </div>
              <div
                onClick={() => setPage(6)}
                className=" mt-3 w-full font-light cursor-pointer justify-center hover:bg-pr bg-transparent text-lg py-3 flex items-center  border border-white hover:text-black  text-white  rounded-3xl"
              >
                ₪250,000 ומעלה
              </div>
            </div>
          </div>
          <div className=" w-20  lg:pr-0 hidden lg:flex items-center justify-center">
            <div className=" line relative">
              <div className=" bg-pr w-9 h-9 rounded-full flex items-center justify-center text-black text-xl font-bold absolute top-0 -left-4">
                1
              </div>
              <div className=" bg-pr font-bold  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute top-16 -left-4">
                2
              </div>
              <div className=" bg-pr font-bold  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute top-32 -left-4">
                3
              </div>
              <div className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute top-48 -left-4">
                4
              </div>
              <div className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute top-64 -left-4">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 grid pb-8 lg:pb-0 pt-16 grid-cols-1 lg:grid-cols-3">
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
            onClick={() => setPage(4)}
            className=" w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
