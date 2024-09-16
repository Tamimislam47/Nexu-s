import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import MusicBox from "@images/BannerMusicBox.png";

import { Link } from "react-router-dom";
import ButtonProvider from "../reuseableComponents/ButtonProvider";

export default function Banner() {
  return (
    <div
      style={{
        height: "calc(100vh - 120px)",
        backgroundImage: "url('/images/Banner.webp')",
      }}
      className="bannerContainer relative flex w-screen items-center justify-center bg-cover"
    >
      {/* //* left side button */}
      <button className="absolute left-[50px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-4xl text-black">
        <MdKeyboardArrowLeft />
      </button>


      <div className="flex w-[60%] items-center">
        <div className="leftSide absolute right-[28%] top-[29%] flex h-[71%] w-[12%] items-center justify-center">
          <img className="h-full w-full" src={MusicBox} alt="" />
        </div>

        <div className="rightSide flex flex-col gap-8 font-extrabold">
          <p className="text-2xl">Welcome to Nexus</p>

          <p className="text-6xl">
            Your Home <br /> Smart Devices & <br />
            Best Solution
          </p>
          <button className="white w-[50%] rounded-[20px] border-[4px] bg-transparent p-4 hover:bg-primary">
            <Link to="/shop/devices">Shop All Devices</Link>
          </button>
        </div>
      </div>

      {/* //*Right side button   */}
      <button className="absolute right-[45px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-4xl text-black">
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
