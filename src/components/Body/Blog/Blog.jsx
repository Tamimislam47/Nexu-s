import React from "react";
import LeftSide from "./BlogSide";
import RightSide from "./BlogSide";
import blogimg from "../../../../public/images/BlogImg.webp";
import rblogimg from "../../../../public/images/blogimgR.webp";

export default function Blog() {
  return (
    <div className="mb-5 mt-5 flex w-[60%] flex-col items-center justify-center gap-10">
      <h1>Latest Blog</h1>
      <p>There are many variations of passages of Lorem Ipsum available</p>

      <div className="grid min-h-[50vh] w-full grid-cols-2">
        <LeftSide image={blogimg} heading="10 Quick Tips About Smart Product" />
        <RightSide
          image={rblogimg}
          heading="5 Real-Life Lessons About Smart Product"
        />
      </div>
    </div>
  );
}
