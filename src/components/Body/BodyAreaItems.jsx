import React from "react";
import watch from "@images/bodyWatch.webp";
import Airdot from "@images/airdot.webp";
import phone from "@images/phone.webp";

import ButtonProvider from "../reuseableComponents/ButtonProvider";
import { FaArrowRight } from "react-icons/fa6";

export default function BodyAreaItems() {
  return (
    <div className="AreaItemsContainer grid h-[80vh] w-[60%] grid-cols-2 place-items-center items-center gap-10">
      <div className="leftSideCard h-[75%] w-[100%] bg-[#F2F8FD]">
        <div
          style={{ backgroundImage: `url(${watch})` }}
          className="image flex h-[60%] w-full items-center justify-center bg-cover"
        >
          {/* <img className="h-full w-full" src={watch} alt="" /> */}
        </div>
        <div className="flex h-[35%] flex-col justify-center p-[50px] text-4xl font-extrabold text-[#999DA0]">
          <p>Smart Watch For</p>
          <p>Your Hand</p>
          <div className="flex justify-between">
            <p>From $29.00</p>
          
            <div className="">
              <ButtonProvider
                icon={FaArrowRight}
                buttonColor="white"
                bgColor="#266BF9"
                height="60px"
                width="60px"
                borderRadius="50%"
                color="white"
              ></ButtonProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="rightSideCard flex h-[75%] w-[100%] flex-col gap-6">
        <div
          style={{ backgroundImage: `url(${Airdot})` }}
          className="upper flex h-[50%] w-full flex-col justify-center gap-5 bg-cover p-5 text-4xl"
        >
          <h1 className="text-4xl text-[#999DA0]">Headphones</h1>
          <p className="text-2xl text-black">From $95.00</p>
          <ButtonProvider
            icon={FaArrowRight}
            buttonColor="white"
            bgColor="#266BF9"
            height="60px"
            width="60px"
            borderRadius="50%"
            color="white"
          />
        </div>
        <div
          style={{ backgroundImage: `url(${phone})` }}
          className="upper flex h-[50%] w-full flex-col justify-center gap-5 bg-cover p-5 text-4xl"
        >
          <h1 className="text-4xl text-[#999DA0]">Smartphone</h1>
          <p className="text-2xl text-black">From $69.00</p>
          <ButtonProvider
            icon={FaArrowRight}
            buttonColor="white"
            bgColor="#266BF9"
            height="60px"
            color="white"
            width="60px"
            borderRadius="50%"
          />
        </div>
      </div>
    </div>
  );
}
