import React from "react";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Step5 = ({ setPage, setName, setPhone, name, phone,postData }) => {
  const postDataToServer = ()=>{
    postData()
    setPage(8)
  }
  return (
    <div className=" min-h-screen overflow-x-hidden w-full relative bg_home ">
      <div className=" absolute lg:hidden top-0 left-0 backdrop z-10"></div>
      <div className=" w-full relative  z-20 pt-10 flex lg:hidden items-center justify-center">
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
          <div onClick={() => setPage(6)} style={{left:"188px"}} className=" bg-pr  w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 ">
            4
          </div>
          <div style={{left:"250px"}} className=" bg-pr  w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4">
            5
          </div>
        </div>
      </div>
      <div className=" w-full py-28 relative z-20 gap-96 grid grid-cols-1 lg:grid-cols-3 pt-40 lg:pt-60">
        <div className=" hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 lg:pl-32 col-span-2 flex items-center justify-end gap-20">
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" pl-6 lg:pl-0 pr-12 lg:pr-16"
          >
            <h1
              style={{ direction: "rtl" }}
              className="lg:text-7xl text-5xl font-bold text-right text-white"
            >
              שלב אחרון!
            </h1>
            <div className="flex items-center pt-5">
              <p
                style={{ direction: "rtl" }}
                className=" text-gray-200 text-xl lg:text-2xl w-full font-normal lg:font-semibold text-right"
              >
                כל שנותר לנו הוא לשוחח בטלפון ולקבוע בפגישה במשרדי החברה שלנו.
              </p>
            </div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="שם מלא…"
              style={{ direction: "rtl", borderRadius:"50px" }}
              
              className="border-2 border-white text-white text-base lg:text-2xl mx-3 w-full outline-none py-3 lg:py-5 px-8 rounded-3xl mt-4 bg-transparent"
            />
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="מספר טלפון…"
              style={{ direction: "rtl", borderRadius:"50px" }}
              
              className="border-2 border-white text-white text-base lg:text-2xl mx-3 mt-8 w-full outline-none py-3 lg:py-5 px-8 rounded-3xl bg-transparent"
            />

            <div className=" w-full flex items-center justify-end mt-5  lg:mt-12 pl-4 lg:pl-0">
              <button
                type="submit"
                onClick={() => (name !== "" && phone !== "") ? postDataToServer() : null}
                style={{ borderRadius: "50px" }}
                className=" px-12 hidden lg:flex hover:bg-pr font-bold text-xl lg:text-4xl mt-1 py-3  lg:py-5  items-center   bg-transparent border-2 border-white text-white "
              >
                 <div className="flex items-center font-bold text-white pt-1">
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft />
              </div>
                צרו איתי קשר
              </button>
              <button
                type="submit"
                onClick={() => (name !== "" && phone !== "") ? postDataToServer() : null}
                style={{ borderRadius: "50px" }}
                className=" px-12 w-full flex lg:hidden hover:bg-pr font-bold ml-2 text-xl lg:text-4xl mt-1 py-3  lg:py-5  items-center   bg-transparent border-2 border-white text-white "
              >
                 <div className="flex items-center font-bold text-white pt-1">
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft />
              </div>
                צרו איתי קשר
              </button>
            
            </div>
          </form>
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
                className=" bg-pr   w-14 h-14 rounded-full flex items-center justify-center text-black text-3xl font-bold absolute top-20 -left-7"
              >
                5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full grid relative z-20 pt-20 pb-8 lg:pb-0 lg:pt-48 grid-cols-1 lg:grid-cols-3">
        <div> </div>
        <div className="flex items-center justify-center ">
          <div className=" h-6">
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt=""
            />
          </div>
        </div>
        <div className=" hidden lg:flex items-center justify-end text-white pr-16">
          <CgArrowLongRight
            onClick={() => setPage(6)}
            className=" w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step5;
