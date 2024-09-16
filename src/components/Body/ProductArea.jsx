import React from "react";
import ProdectCards from "./ProductCards";
import ButtonProvider from "../reuseableComponents/ButtonProvider";

export default function ProductArea() {
  const itemsCards = [];

  for (let i = 0; i < 8; i++) {
    itemsCards.push(<ProdectCards key={i} itemName="Mobile" itemPrice={233} />);
  }
  return (
    <div className="flex min-h-screen w-screen justify-center">
      <div className="container w-[60%]">
        <nav className="mb-7">
          <ul className="flex w-[60%] gap-9">
            <li className="h-[50px] w-[15%] rounded-[10px] hover:bg-primary">
              <ButtonProvider
                text="New Arrivals"
                border="2px black solid"
                padding="5px"
                width="100%"
                height="100%"
                color="black"
                borderRadius="10px"
              />
            </li>
            <li className="h-[50px] w-[15%] rounded-[10px] hover:bg-primary">
              <ButtonProvider
                text="Top Rated"
                border="2px black solid"
                padding="5px"
                width="100%"
                height="100%"
                color="black"
                borderRadius="10px"
              />
            </li>
            <li className="h-[50px] w-[15%] rounded-[10px] hover:bg-primary">
              <ButtonProvider
                text="Featured"
                border="2px black solid"
                padding="5px"
                width="100%"
                height="100%"
                color="black"
                borderRadius="10px"
              />
            </li>
          </ul>
        </nav>
        <div className="productItems mt- grid min-h-screen w-full grid-cols-4 gap-5">
          {itemsCards}
        </div>
      </div>
    </div>
  );
}
