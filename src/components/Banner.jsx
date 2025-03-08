import React from "react";
import bannerImage from "./banner.jpg";

function Banner() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative m-[2px] h-[75vh] w-[100%] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-3 text-xl">
          THE BATMAN
        </div>
      </div>
    </div>
  );
}

export default Banner;
