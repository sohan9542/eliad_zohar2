import React from "react";
import logo from "../images/Logo.svg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CgArrowLongLeft } from "react-icons/cg";
import avatar1 from "../images/Avatar Icon.svg";
import avatar2 from "../images/Avatar Icon 2.svg";
import avatar3 from "../images/Avatar Icon 3.svg";
const Home = ({setPage}) => {
  return (
    <div className=" min-h-screen w-full relative bg_home">
      <div className=" absolute lg:hidden top-0 left-0 backdrop z-10">

      </div>
      <div className=" w-full relative z-20 flex items-center justify-between pt-5 pl-28 lg:pl-60 pr-0 lg:pr-16">
        <div className=" lg:h-12 h-8">
          <img
            src={logo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className=" hidden lg:block">
          <button  onClick={()=>setPage(2)}  className=" px-4 mt-1 py-2 flex items-center gap-1 text-xl border font-bold hover:bg-pr hover:border-transparent hover:text-black border-white rounded-3xl text-white">
            <FaLongArrowAltLeft /> התחל בשאלון
          </button>
        </div>
      </div>
      <div className=" w-full relative z-20 mt-16 lg:mt-0 py-12 grid grid-cols-1 lg:grid-cols-3">
        <div className=" hidden lg:block"></div>
        <div className=" lg:pr-16 pr-8 lg:col-span-2">
          <h1 style={{direction:"rtl"}} className=" text-5xl lg:text-9xl font-bold w-full text-right text-white">
            נקים עבורך <br /> את הקולקציה <br /> הבאה.
          </h1>
          <p style={{direction:"rtl"}} className=" text-lg lg:text-2xl font-light text-gray-200 text-right w-full py-8 pl-4 lg:pl-80">
            אנו מתמחים בהקמת קולקציות NFT מ-0 ל-100, חברתנו מבצעת תהליך ליווי
            מלא עד להגעה לקולצייה שתמיד חלמת. אפיון, אסטרטגיה, איור, מידולים תלת
            מימדיים, פיתוח Smart contracts כל אלה הם רק חלק קטן מהשירותים שלנו…
          </p>
          <div className=" w-full flex items-center justify-end mt-5">
            <button style={{borderRadius:"50px"}} onClick={()=>setPage(2)} className=" px-12 hidden lg:flex hover:bg-white font-bold text-4xl mt-1 py-5  items-center  border  bg-pr border-transparent text-black ">
              <div className="flex items-center font-bold text-black pt-1">
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft />
              </div>
              התחל בשאלון
            </button>
            <button style={{borderRadius:"50px"}} onClick={()=>setPage(2)} className=" px-4 flex lg:hidden hover:bg-white font-bold text-3xl mt-1 py-3  items-center  border  bg-pr border-transparent text-black ">
              <div className="flex items-center font-bold text-black pt-1">
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft />
              </div>
              התחל בשאלון
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full relative hidden lg:block z-20 pt-20 pl-0 lg:pl-10">
        <div className="flex items-center">
          <a href="#" className=" h-52 w-24 ">
            <img
              src={avatar1}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <a href="#" className=" h-52 w-24">
            <img
              src={avatar2}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <a href="#" className=" h-52 w-24">
            <img
              src={avatar3}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <p className="text-2xl flex items-center gap-4 text-white pl-0 lg:pl-3"><CgArrowLongLeft className=" w-12 h-12"/>בין הפרויקטים שלנו</p>
        </div>
      </div>
      <div className=" w-full relative block  lg:hidden z-20 pl-3 lg:pl-10">
        <div className="flex items-center gap-1">
          <a href="#" className=" h-32 w-14 ">
            <img
              src={avatar1}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <a href="#" className=" h-32 w-14">
            <img
              src={avatar2}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <a href="#" className=" h-32 w-14">
            <img
              src={avatar3}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <p className="text-lg flex items-center gap-1 text-white pl-0">
            <CgArrowLongLeft className=" w-8 h-8"/>בין הפרויקטים שלנו</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
