import React from "react";

function Cards({ posterPath, title, isAdded, toggleWatchlist }) {
  return (
    <div
      className="relative h-[300px] w-[180px] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg hover:scale-110 duration-300 cursor-pointer m-[5px]"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterPath})`,
      }}
    >
      {/* Heart Button (Inside Relative Div) */}
      <button
        className="absolute top-2 right-2 text-xl"
        onClick={toggleWatchlist}
      >
        {isAdded ? (
          <i className="fa-solid fa-heart text-red-500"></i>
        ) : (
          <i className="fa-regular fa-heart text-gray-300"></i>
        )}
      </button>

      {/* Movie Title */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center text-sm py-2">
        {title}
      </div>
    </div>
  );
}

export default Cards;
