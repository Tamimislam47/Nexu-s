import React from "react";
import product1 from "../../../public/images/Headphone.webp";
import product2 from "../../../public/images/watch.webp";
import Iphone from "../../../public/images/ipone10.webp";
import Button from "../reuseableComponents/ButtonProvider";

export default function FeatureSection() {
  return (
    <div className="FeatureContainer min-h-[100vh] w-[60%]">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h1 className="text-5xl font-bold">Featured Offers</h1>
        <p>There are many variations of passages of Lorem Ipsum available</p>

        {/* //*Feature's Card's */}

        <div className="cards grid h-[90vh] w-full grid-cols-2 gap-5">
          {/* //*LeftSide */}
          <div
            style={{
              backgroundImage: `url(${product1})`,
              borderRadius: "20px",
            }}
            className="flex h-full w-full flex-col items-center justify-center border-[3px] border-borderColor bg-cover"
          >
            <div className="textContainer flex h-[80%] w-full flex-col items-center justify-between">
              <div className="uptxt flex flex-col gap-3">
                <h1 className="text-center text-4xl font-bold">
                  Bluetooth Headphone
                </h1>
                <p className="text-center text-2xl">$38.50</p>
              </div>
              <div className="btn h-[60px] w-[200px] rounded-[25px] text-2xl font-bold">
                <Button
                  color="white"
                  text="Shop Now"
                  bgColor="#266BF9"
                  width="100%"
                  height="100%"
                  borderRadius="25px"
                ></Button>
              </div>
            </div>
          </div>

          {/* //*RightSide */}

          <div className="rightSide flex h-full w-full flex-col gap-3">
            {/* //*Top RightSide */}

            <div className="top flex h-1/2 w-full rounded-[20px] border-[5px]">
              <div
                style={{
                  backgroundImage: `url(${product2})`,
                  borderRight: "3px  solid  #E5E7EB",
                }}
                className="top h-full w-1/2 bg-blue-700 bg-cover"
              ></div>
              <div className="topRight flex h-full w-1/2 flex-col items-center justify-center">
                <div className="text flex h-[95%] w-[95%] flex-col items-start justify-center gap-3 p-4 text-xl font-bold">
                  <button className="text-[#666666]">Time</button>
                  <p>Ladies Smart Watch</p>
                  <p className="text-[#666666]">$45.00</p>
                  <div className="flex w-full items-center justify-center">
                    <hr className="w-[90%] text-center" />
                  </div>
                  <ul className="flex list-disc flex-col gap-2 text-gray-800 marker:text-blue-500">
                    <li>Predecessor: None</li>
                    <li>Support Type : Neutral</li>
                    <li>Cushioning : High Energizing</li>
                    <li>Total Weight : 300gm</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* //*Bottom RightSide */}
            <div className="bottom flex h-1/2 w-full rounded-[20px] border-[5px]">
              <div
                style={{
                  backgroundImage: `url(${Iphone})`,
                  borderRight: "3px  solid  #E5E7EB",
                }}
                className="top h-full w-1/2 bg-cover"
              ></div>
              <div className="topRight flex h-full w-1/2 flex-col items-center justify-center">
                <div className="text flex h-[95%] w-[95%] flex-col items-start justify-center gap-3 p-4 text-xl font-bold">
                  <button className="text-[#666666]">Time</button>
                  <p>Ladies Smart Watch</p>
                  <p className="text-[#666666]">$45.00</p>
                  <div className="flex w-full items-center justify-center">
                    <hr className="w-[90%] text-center" />
                  </div>
                  <ul className="flex list-disc flex-col gap-2 text-gray-800 marker:text-blue-500">
                    <li>Predecessor: None</li>
                    <li>Support Type : Neutral</li>
                    <li>Cushioning : High Energizing</li>
                    <li>Total Weight : 300gm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
