import React from "react";
import error from "../images/Thank You Icon.svg";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
const Success = ({ setPage }) => {
  return (
    <div className=" min-h-screen bg_noyes relative">
      <div className="absolute top-0 left-0 backdrop flex items-center  flex-col gap-5">
        <div className=" lg:h-16 mt-20 lg:mt-40 h-24">
          <img
            src={error}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <h1
          className="lg:text-7xl text-5xl text-center font-bold text-white"
          style={{ direction: "rtl" }}
        >
          ברכות! סיימת את השאלון
        </h1>
        <p
          className=" text-xl text-center hidden lg:block text-white font-light"
          style={{ width: "450px" }}
        >
          סיימת את השאלון שלנו, נציג מהחברה יצור עמך קשר בהקדם בכדי לתאם פגישה
          ולקדם את הרעיון שלך!
        </p>
        <p className=" text-xl w-full font-bold text-center block lg:hidden text-white px-2">
          סיימת את השאלון שלנו, נציג מהחברה יצור עמך קשר בהקדם בכדי לתאם פגישה
          ולקדם את הרעיון שלך!
        </p>
        <button
          onClick={() => setPage(1)}
          className=" mt-3 px-9 hover:bg-pr bg-transparent text-2xl py-2 flex items-center  font-bold border border-white hover:text-black  text-white  rounded-3xl"
        >
          חזרה לעמוד הראשי
        </button>
        <div className=" w-full grid relative z-20 pt-20  pb-8 lg:pb-0 lg:pt-80 grid-cols-1 lg:grid-cols-3">
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
              onClick={() => setPage(1)}
              className=" w-8 h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
