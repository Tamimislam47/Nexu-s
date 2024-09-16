// App.jsx
import React from "react";
import MaxWidthWrapper from "./components/reuseableComponents/MaxWidthWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/MainAllCom";
import Products from "./components/Main/Products";
import BodyAllCom from "./components/Body/BodyAllCom";
import Footer from "./components/Footer/Footer";
import Login from "./components/SignIn_SIngUpPage/Login";
const App = () => {
  return (
    <div className="app m-0 flex h-screen w-screen flex-col justify-center overflow-x-hidden bg-base-100 p-0">
      <BrowserRouter>
        <MaxWidthWrapper>
          {/* <Main />
          <BodyAllCom />
          <Footer /> */}
          <Login />
          <Routes>
            <Route path="/shop/devices" element={<Products />} />
          </Routes>
        </MaxWidthWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
