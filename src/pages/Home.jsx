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
      <div className=" w-full relative z-20 flex items-center justify-between pt-5 pl-32 lg:pl-56 pr-0 lg:pr-16">
        <div className=" lg:h-8 h-6">
          <img
            src={logo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className=" hidden lg:block">
          <button  onClick={()=>setPage(2)}  className=" px-3 mt-1 py-1 flex items-center gap-1 border font-bold hover:bg-pr hover:border-transparent hover:text-black border-white rounded-3xl text-white">
            <FaLongArrowAltLeft /> התחל בשאלון
          </button>
        </div>
      </div>
      <div className=" w-full relative z-20 py-28 grid grid-cols-1 lg:grid-cols-3">
        <div className=" hidden lg:block"></div>
        <div className=" lg:pr-16 pr-8 lg:col-span-2">
          <h1 style={{direction:"rtl"}} className=" text-6xl lg:text-8xl font-bold w-full text-right text-white">
            נקים עבורך <br /> את הקולקציה <br /> הבאה.
          </h1>
          <p style={{direction:"rtl"}} className="text-xl font-light text-white text-right w-full pt-5 pl-4 lg:pl-32">
            אנו מתמחים בהקמת קולקציות NFT מ-0 ל-100, חברתנו מבצעת תהליך ליווי
            מלא עד להגעה לקולצייה שתמיד חלמת. אפיון, אסטרטגיה, איור, מידולים תלת
            מימדיים, פיתוח Smart contracts כל אלה הם רק חלק קטן מהשירותים שלנו…
          </p>
          <div className=" w-full flex items-center justify-end mt-5">
            <button onClick={()=>setPage(2)} className=" px-7 hover:bg-white text-2xl mt-1 py-2 flex items-center  border font-bold bg-pr border-transparent text-black  rounded-3xl">
              <div className="flex items-center text-black pt-1">
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft className="mGap" />
                <MdOutlineKeyboardArrowLeft />
              </div>
              התחל בשאלון
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 pl-0 lg:pl-4">
        <div className="flex items-center">
          <a href="#" className=" h-32 w-16">
            <img
              src={avatar1}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <a href="#" className=" h-32 w-16">
            <img
              src={avatar2}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <a href="#" className=" h-32 w-16">
            <img
              src={avatar3}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </a>
          <p className="text-lg flex items-center gap-2 text-white pl-0 lg:pl-3"><CgArrowLongLeft className=" w-7 h-7"/>בין הפרויקטים שלנו</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
