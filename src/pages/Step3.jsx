import React from "react";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
const Step3 = ({ setPage, setDev_budget }) => {
  return (
    <div className=" min-h-screen relative w-full bg_home ">
      <div className=" absolute lg:hidden top-0 left-0 backdrop z-10"></div>
      <div className=" w-full relative z-20 pt-10 flex lg:hidden items-center justify-center">
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
            className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 "
          >
            4
          </div>
          <div
            style={{ left: "200px" }}
            className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4"
          >
            5
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 py-28 lg:pl-60 gap-20 grid grid-cols-1 lg:grid-cols-3 pt-40 lg:pt-60">
        <div className=" hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 col-span-2 flex items-center gap-20">
          <div className="pr-0 px-2 lg:pr-16">
            <h1
              style={{ direction: "rtl" }}
              className="text-4xl lg:text-7xl  font-bold text-center lg:text-right text-white"
            >
              מה התקציה שלך לפיתוח והקמת קולקציית ה-NFT?
            </h1>

            <div className=" w-full grid px-4 lg:px-0 grid-cols-1 mt-12 lg:grid-cols-2 gap-x-7 gap-y-9 pl-4 lg:pl-16">
              <div
                onClick={() => {
                  setDev_budget("₪25,000 - ₪50,000")
                  setPage(6)
                }}
                style={{borderRadius:"50px"}}
                className=" px-12 hover:bg-pr hover:text-white text-2xl mt-1 py-6 flex items-center   font-bold border-2 border-white   text-white  rounded-3xl"
              >
                ₪25,000 - ₪50,000
              </div>
              <div
                onClick={() =>{
                  setDev_budget("₪50,000 - ₪100,000")
                  setPage(6)
                }}
                style={{borderRadius:"50px"}}
                className=" px-12 hover:bg-pr hover:text-white text-2xl mt-1 py-6 flex items-center   font-bold border-2 border-white   text-white  rounded-3xl"
              >
                ₪50,000 - ₪100,000
              </div>
              <div
                onClick={() =>{
                  setDev_budget("₪100,000 - ₪250,000")
                  setPage(6)
                }}
                style={{borderRadius:"50px"}}
                className=" px-12 hover:bg-pr hover:text-white text-2xl mt-1 py-6 flex items-center   font-bold border-2 border-white   text-white  rounded-3xl"
              >
                ₪100,000 - ₪250,000
              </div>
              <div
                onClick={() =>{
                  setDev_budget("₪250,000 ומעלה")
                  setPage(6)
                }}
                style={{borderRadius:"50px"}}
                className=" px-12 hover:bg-pr hover:text-white text-2xl mt-1 py-6 flex items-center   font-bold border-2 border-white   text-white  rounded-3xl"
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
              <div style={{top:"88px"}} className=" bg-pr   w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-20 -left-7">
                2
              </div>
              <div style={{top:"176px"}} className="  bg-pr   w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-20 -left-7">
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
      <div className=" w-full relative z-20 grid pt-28 pb-8  lg:pt-32 grid-cols-1 lg:grid-cols-3">
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
            onClick={() => setPage(4)}
            className=" w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
