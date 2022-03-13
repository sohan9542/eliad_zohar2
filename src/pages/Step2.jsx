import React from "react";
import logo from "../images/Logo.svg";
import { CgArrowLongRight } from "react-icons/cg";
import sheild from "../images/Shield Icon.svg";
const Step2 = ({ setPage, idea, setIdea }) => {
  return (
    <div className=" min-h-screen w-full relative bg_home ">
      <div className=" absolute lg:hidden top-0 left-0 backdrop z-10"></div>
      <div className=" w-full relative z-20 pt-10 flex lg:hidden items-center justify-center">
        <div className=" line_verticla relative">
          <div className=" bg-pr w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 -left-3">
            1
          </div>
          <div
            style={{ left: "55px" }}
            className=" bg-pr  w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 "
          >
            2
          </div>
          <div
            style={{ left: "120px" }}
            className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 "
          >
            3
          </div>
          <div
            style={{ left: "188px" }}
            className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 "
          >
            4
          </div>
          <div
            style={{ left: "250px" }}
            className=" bg-black border border-white w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4"
          >
            5
          </div>
        </div>
      </div>
      <div className=" w-full relative z-20 py-16 gap-96 grid grid-cols-1 lg:grid-cols-3 pt-32 lg:pt-40">
        <div className=" hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 lg:pl-20 lg:col-span-2 flex items-center gap-2">
          <form onSubmit={(e) => e.preventDefault()} className="pr-8 lg:pr-32">
            <h1
              style={{ direction: "rtl" }}
              className=" text-5xl lg:text-7xl font-bold text-right text-white"
            >
              פרט בכלליות <br /> על הרעיון:
            </h1>
            <div className="flex items-center gap-x-2 lg:gap-x-7 divide-x py-7">
              <p
                style={{ direction: "rtl" }}
                className=" text-gray-300 text-lg pl-2 lg:text-2xl font-light text-right"
              >
                אנחנו מתחייבים שלא לשתף את הרעיון שלך אם אף גורם ו-או אדם אחר,
                ולשמור על סודיות מוחלטת בנושא.
              </p>
              <div
                style={{ height: "48px" }}
                className=" hidden lg:block   pl-6 lg:h-32  w-24"
              >
                <img
                  src={sheild}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className=" block lg:hidden  pl-2  lg:h-20 h-10 w-20">
                <img
                  src={sheild}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>

            <textarea
              onChange={(e) => setIdea(e.target.value)}
              placeholder="הקלד כאן…"
              style={{ direction: "rtl", borderRadius: "50px" }}
              className=" border border-white hidden lg:block text-white w-full outline-none p-10 rounded-3xl text-2xl mt-4 bg-transparent"
              name=""
              value={idea}
              required
              id=""
              cols="15"
              rows="6"
            ></textarea>
            <div className=" flex items-center w-full justify-end">
              <textarea
                placeholder="הקלד כאן…"
                style={{ direction: "rtl" }}
                className=" border border-white block lg:hidden text-white w-72 outline-none p-2 rounded-3xl mt-4 bg-transparent"
                name=""
                id=""
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                required
                cols="15"
                rows="6"
              ></textarea>
            </div>
            <div className=" w-full flex items-center justify-end pt-8">
              <button
                onClick={() => (idea !== "" ? setPage(5) : null)}
                type="submit"
                style={{ borderRadius: "50px" }}
                className=" px-12 lg:px-16 hover:bg-pr hover:text-white text-xl lg:text-3xl mt-1 py-3 lg:py-6 flex items-center   font-bold border-2 border-white   text-white  rounded-3xl"
              >
                המשך
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
                className=" bg-black border border-white w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-light absolute top-44 -left-7"
              >
                3
              </div>
              <div
                style={{ top: "265px" }}
                className=" bg-black border border-white w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl font-light absolute  -left-7"
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
      <div className=" w-full relative z-20 grid pt-10 pb-8  lg:pt-4 grid-cols-1 lg:grid-cols-3">
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
            onClick={() => setPage(2)}
            className=" w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
