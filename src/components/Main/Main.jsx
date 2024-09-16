import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

export default function Main({ children }) {
  return (
    <>
      <nav className="h-[54px] w-[62%] p-3">
        <div className="h-full w-full">
          <div className="top flex items-center justify-between">
            <p>World Wide Completely Free Returns and Shipping</p>

            <ul className="flex items-center justify-center">
              <li className="flex h-[20px] items-center justify-center border-[3px] border-b-0 border-l-0 border-t-0 border-borderColor p-2 hover:cursor-pointer hover:text-primary">
                <FaPhoneAlt />
                <p className="ml-[8px]">+012 3456 789</p>
              </li>
              <li className="flex h-[20px] items-center justify-center border-[3px] border-b-0 border-l-0 border-t-0 border-borderColor p-2 hover:cursor-pointer hover:text-primary">
                <FaRegEnvelope />
                <p className="ml-[8px]">OnlineBazar@gmail.com</p>
              </li>
              <li className="flex h-[20px] items-center justify-center hover:cursor-pointer hover:text-primary">
                <MdOutlineAccountCircle />
                <p className="pl-[8px]">Account</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="w-[100vw] border-t-2 border-borderColor" />

      <nav className="flex h-[180px] w-[60%] flex-col items-center">
        <div className="midNav flex h-[70%] w-full items-center justify-between">
          <h1 className="font-bold sm:text-4xl">
            Nexu'<span className="text-primary"> s</span>
          </h1>
          <div className="flex h-[40%] w-[40%]">
            <input
              className="h-full w-[85%] rounded-l-lg text-black"
              type="text"
            />

            <button className="flex h-full w-[15%] items-center justify-center rounded-r-lg bg-primary pl-2 pr-2 text-[25px]">
              <FaSearch />
            </button>
          </div>
          <div className="icons flex gap-3 text-2xl">
            <FaRegHeart />
            <LuShoppingBag />
          </div>
        </div>

        <div className="bottomNav flex h-[30%] w-full items-center justify-center bg-primary">
          <p className="pr-9 hover:cursor-pointer">HOME</p>
          <p className="pr-9 hover:cursor-pointer">ABOUT</p>

          {/* //* page section */}

          <select className="flex items-center bg-primary hover:cursor-pointer">
            <option value="0">PAGE</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>

          {/* //*BLOG dropdown  */}

          <select className="flex items-center bg-primary pl-9 hover:cursor-pointer">
            <option value="0">BLOG</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>

          <p className="pl-9 pr-9">CONTACT</p>
        </div>
      </nav>

      {children}
    </>
  );
}
