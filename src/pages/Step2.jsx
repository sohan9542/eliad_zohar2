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
          <div className=" bg-pr w-9 h-9 rounded-full flex items-center justify-center text-black text-xl font-bold absolute -top-4 -left-3">
            1
          </div>
          <div
            style={{ left: "40px" }}
            className=" bg-pr font-bold border-white  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute -top-4 "
          >
            2
          </div>
          <div
            style={{ left: "91px" }}
            className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute -top-4 "
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
      <div className=" w-full relative z-20 py-28 gap-96 grid grid-cols-1 lg:grid-cols-3 pt-40 lg:pt-60">
        <div className=" hidden lg:block"></div>
        <div className=" pr-0 lg:pr-16 lg:col-span-2 flex items-center gap-2">
          <form onSubmit={(e) => e.preventDefault()} className="pr-8 lg:pr-16">
            <h1
              style={{ direction: "rtl" }}
              className=" text-5xl lg:text-7xl font-bold text-right text-white"
            >
              פרט בכלליות <br /> על הרעיון:
            </h1>
            <div className="flex items-center gap-x-3 divide-x pt-5">
              <p
                style={{ direction: "rtl" }}
                className=" text-white text-lg font-light text-right"
              >
                אנחנו מתחייבים שלא לשתף את הרעיון שלך אם אף גורם ו-או אדם אחר,
                ולשמור על סודיות מוחלטת בנושא.
              </p>
              <div className="  pl-2 lg:h-full h-12 w-32">
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
              style={{ direction: "rtl" }}
              className=" border border-white hidden lg:block text-white w-full outline-none p-2 rounded-3xl mt-4 bg-transparent"
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
            <div className=" w-full flex items-center justify-end">
              <button
                onClick={() => idea !== "" ? setPage(5): null}
                type="submit"
                className=" mt-5 lg:mt-3 px-9 hover:bg-pr bg-transparent text-2xl py-2 flex items-center  font-bold border border-white hover:text-black  text-white  rounded-3xl"
              >
                המשך
              </button>
            </div>
          </form>
          <div className=" w-20  hidden lg:flex items-center justify-center">
            <div className=" line relative">
              <div className=" bg-pr w-9 h-9 rounded-full flex items-center justify-center text-black text-xl font-bold absolute top-0 -left-4">
                1
              </div>
              <div className=" bg-pr font-bold  w-9 h-9 rounded-full flex items-center justify-center text-black text-xl  absolute top-16 -left-4">
                2
              </div>
              <div className=" bg-black border border-white  w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-light absolute top-32 -left-4">
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
      <div className=" w-full relative z-20 grid lg:pt-8 pt-0 pb-8 lg:pb-0 grid-cols-1 lg:grid-cols-3">
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
            onClick={() => setPage(2)}
            className=" w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
