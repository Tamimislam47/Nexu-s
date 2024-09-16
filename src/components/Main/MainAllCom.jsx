import React from "react";

import Banner from "./Banner";
import Main from "./Main";

export default function MainAllCom() {
  return (
    <div className="headerContainer flex h-screen w-screen flex-col items-center bg-primaryBg text-white">
      <Main>
        <Banner />
      </Main>
    </div>
  );
}
