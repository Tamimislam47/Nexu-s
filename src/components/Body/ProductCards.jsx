import ButtonProvider from "../reuseableComponents/ButtonProvider";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import image1 from "@images/image1.webp";
import React from "react";

export default function ProdectCards(props) {

  //!Cards Info Fetching Code write here

  const { image, itemName, itemPrice } = props;
  const btnCount = 1;

  return (
    <>
      <div className="card h-fullw-full relative border-[3px] border-[#E1E1E1]">
        {/* //*sales set postition If btnCount  is 1 then Upper active  else lower active */}

        <div className="sales">
          <div
            style={{
              display: btnCount === 1 ? "block" : "none",
              borderRadius: "10px",
            }}
            className="absolute left-2 top-2 flex min-h-[32px] w-[70px] items-center justify-center bg-black font-bold text-white"
          >
            <ButtonProvider
              text="New"
              width="100%"
              heigh="100%"
            ></ButtonProvider>
          </div>

          <div
            style={{
              display: btnCount === 2 ? "block" : "none",
              borderRadius: "10px",
            }}
            className="absolute left-0 top-10 flex min-h-[32px] w-[70px] items-center justify-center bg-[#266BF9] font-bold text-white"
          >
            <ButtonProvider
              text="New"
              width="100%"
              heigh="100%"
            ></ButtonProvider>
          </div>
        </div>

        <div className="image h-[70%] w-full">
          <img className="h-full w-full" src={image1} alt="" />
        </div>
        <div className="text flex h-[30%] flex-col items-center justify-around">
          <p className="text-[#707070]">Accessories</p>
          <p className="font-bold">{itemName}</p>
          <p className="text-[#707070]">{itemPrice}</p>
          <div className="button flex w-full justify-center gap-2 pb-3 text-white">
            {/* //*Cards Bottom btns  */}

            <ButtonProvider
              icon={LuShoppingBag}
              width="40px"
              height="45px"
              bgColor="#707070"
              borderRadius="10px"
            />

            <ButtonProvider
              bgColor="#707070"
              icon={FaRegHeart}
              width="40px"
              height="45px"
              borderRadius="10px"
            />

            <ButtonProvider
              bgColor="#707070"
              icon={IoEyeOutline}
              width="40px"
              height="45px"
              borderRadius="10px"
            />

            <ButtonProvider
              icon={FaArrowsRotate}
              width="40px"
              height="45px"
              bgColor="#707070"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
