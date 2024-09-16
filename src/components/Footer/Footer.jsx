import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function footer() {
  return (
    <div className="flex min-h-[50vh] w-screen justify-center bg-[#F2F8FD]">
      <div className="innerContainer flex w-[60%] items-center justify-center">
        <div className="contextContainer grid h-[95%] w-full grid-cols-4 items-center justify-center">
          <div className="flex h-[55%]  w-full flex-col items-center justify-around gap-2">
            <ul className="">
              <h1 className="mb-2 text-4xl font-semibold">
                Nexu'<span className="text-primary"> s</span>
              </h1>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
                  templ incididunt ut labore
                </p>
              </li>
              {/* //*icons */}
              <li className="icons mt-3 flex gap-3 text-3xl">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />{" "}
                </li>
                <li>
                  <FaInstagramSquare />
                </li>
                <li></li>
              </li>
            </ul>
          </div>

          {/* //*Services */}
          <div className="flex h-[55%]  w-full flex-col items-center justify-around gap-2">
            <ul>
              <h1 className="mb-2 text-4xl font-semibold">Services</h1>
              <li>My Account</li>
              {/* //*icons */}
              <li>Contact</li>
              <li>Shopping cart</li>
              <li>Shop</li>
              <li>Services Login</li>
            </ul>
          </div>

          {/* //*My-Account */}
          <div className="flex h-[55%]  w-full flex-col items-center justify-around gap-2">
            <ul>
              <h1 className="mb-2 text-4xl font-semibold">My Account</h1>
              <li>My Account</li>
              <li>Contact</li>
              <li>Shopping cart</li>
              <li>Shop</li>
              <li>Services Login</li>
            </ul>
          </div>

          {/* //*Contact Info */}
          <div className="flex h-[55%]  w-full flex-col items-center justify-around gap-2">
            <ul>
              <h1 className="mb-2 text-4xl font-semibold">Contact Info</h1>
              <li>Address: Your Address Goes Here.</li>
              <li>Phone/Fax: 01817401961</li>
              <li>
                <p className="hover:text-primary">
                  Email:
                  <a href="mailto:demo@example.com">tamim.furious@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
