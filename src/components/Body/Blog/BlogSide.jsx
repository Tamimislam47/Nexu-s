import React from "react";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function BlogSide(props) {
  const { image, heading } = props;

  return (
    <div className="h-full w-full">
      <div className="contianer flex h-full w-full flex-col items-start justify-around gap-5 lg:flex-row">
        <img src={image} className="h-full w-1/2 rounded-lg shadow-2xl" />
        <div className="flex h-full w-full flex-col items-start justify-around gap-5 pb-4">
          <div className="uppertext flex h-full items-center justify-center gap-4 font-bold">
            <span className="flex items-center gap-2">
              <i className="text-customColor">
                <FaRegCalendarAlt />
              </i>
              Data
            </span>
            <span className="flex items-center gap-2">
              <i className="text-customColor">
                <IoPerson />
              </i>
              Wild Nick
            </span>
          </div>

          <h1 className="text-3xl font-bold">{heading}</h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn w-[150px] bg-[#4E4E4E] p-2 text-xl text-white hover:bg-primary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
