import React from "react";
import error from "../images/Thank You Icon.svg";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
const Success = ({ setPage }) => {
  return (
    <div className=" min-h-screen bg_noyes relative">
      <div className="absolute top-0 left-0 backdrop flex items-center  flex-col gap-7">
        <div className=" lg:h-36 mt-20 lg:mt-40 h-24">
          <img
            src={error}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <h1
          className="lg:text-7xl text-5xl px-2 lg:px-0 text-center font-bold text-white"
          style={{ direction: "rtl" }}
        >
          ברכות! סיימת את השאלון
        </h1>
        <p
          className=" text-3xl text-center hidden lg:block text-gray-200 font-semibold"
          style={{ width: "750px" }}
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
          style={{borderRadius:"50px"}}
          className=" px-12 hover:bg-pr hover:text-white text-xl lg:text-4xl mt-5 py-3 lg:py-6 flex items-center   font-bold border-2 border-white   text-white  rounded-3xl"
        >
          חזרה לעמוד הראשי
        </button>
        <div className=" w-full relative z-20 grid pt-44 pb-8 lg:pb-0 lg:pt-72 grid-cols-1 lg:grid-cols-3">
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
    </div>
  );
};

export default Success;
