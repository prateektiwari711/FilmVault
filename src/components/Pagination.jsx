import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Pagination({ page, handlePrev, handleNext }) {
  return (
    <div className="w-full bg-black bg-opacity-60 text-white text-center text-xl p-2 flex justify-center items-center gap-4">
      <i
        onClick={handlePrev}
        className="fa-solid fa-arrow-left text-white cursor-pointer"
      ></i>
      <span>{page}</span>
      <i
        onClick={handleNext}
        className="fa-solid fa-arrow-right text-white"
      ></i>
    </div>
  );
}

export default Pagination;
