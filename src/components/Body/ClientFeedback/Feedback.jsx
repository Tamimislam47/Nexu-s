import React from "react";

export default function Feedback() {
  return (
    <div className="mb-5 mt-5 h-screen w-screen">
      <div className="feedbackContainer flex h-screen w-screen flex-col items-center justify-around bg-red-500">
        <div  className="feedbackHeader flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Client Feedback</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="ClientCommend h-1/2 w-[60%] bg-green-300">
          <div className="leftSide"></div>
          <div className="rightSide"></div>
        </div>
        <div className="bottom h-[20vh] w-[60%]"></div>
      </div>
    </div>
  );
}
