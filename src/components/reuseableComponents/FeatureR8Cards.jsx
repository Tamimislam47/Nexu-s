import React from "react";

export default function FeatureR8Cards() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${product2})`,
        }}
        className="top h-full w-1/2 bg-blue-700 bg-cover"
      ></div>
      <div className="topRight flex h-full w-1/2 flex-col items-center justify-center">
        <div className="text flex h-[95%] w-[95%] flex-col items-start justify-center gap-3 p-4">
          <button>Time</button>
          <p>Ladies Smart Watch</p>
          <p>$45.00</p>
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
    </>
  );
}
