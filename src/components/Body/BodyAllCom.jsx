import React from "react";
import BodyAreaItems from "./BodyAreaItems";
import ProductArea from "./ProductArea";
import Bodybanner from "./ Bodybanner";
import FeatureSection from "./FeatureSection";
import Feedback from "./ClientFeedback/Feedback";
import Blog from "./Blog/Blog";

export default function BodyAllCom() {
  return (
    <div className="flex w-[100vw] flex-col items-center justify-center">
      <BodyAreaItems />
      <ProductArea />
      <Bodybanner />
      <FeatureSection />
      <Feedback />
      <Blog />
    </div>
  );
}
