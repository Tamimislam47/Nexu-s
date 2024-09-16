import image from "../../../public/images/fashionBg.webp";
import React from "react";
import ButtonProvider from "../reuseableComponents/ButtonProvider";

export default function Bodybanner() {
  console.log(`${image}`);

  return (
    <div
      style={{ backgroundImage: `url(${image} )` }}
      className="banner mb-28 mt-28 flex min-h-[50vh] w-screen flex-col items-center justify-center gap-5 text-white"
    >
      <p className="text-6xl">Smart Fashion</p>

      <p className="text-8xl font-extrabold">With Smart Devices</p>
      <div className="h-[70px] w-[250px] rounded-[20px] font-bold hover:bg-primary">
        <ButtonProvider
          color="white"
          border="3px solid white"
          text="Shop All Devices"
          padding="15px 25px"
          borderRadius="20px"
          width="100%"
          height="100%"
        ></ButtonProvider>
      </div>
    </div>
  );
}
