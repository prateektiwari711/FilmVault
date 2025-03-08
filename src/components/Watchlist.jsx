import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import genre from "../utility/genre";

function Watchlist({ watchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function removeFromWatchlist(movieId) {
    setWatchlist(watchlist.filter((m) => m.id !== movieId));
  }

  function sortDecreasing() {
    setWatchlist(
      [...watchlist].sort((a, b) => b.vote_average - a.vote_average)
    );
  }

  function sortIncreasing() {
    setWatchlist(
      [...watchlist].sort((a, b) => a.vote_average - b.vote_average)
    );
  }

  function sortDecreasingPopularity() {
    setWatchlist([...watchlist].sort((a, b) => b.popularity - a.popularity));
  }

  function sortIncreasingPopularity() {
    setWatchlist([...watchlist].sort((a, b) => a.popularity - b.popularity));
  }

  function getGenreNames(genreIds) {
    return genreIds
      .map((id) => genre.find((g) => g.id === id)?.name)
      .filter(Boolean)
      .join(", ");
  }

  const uniqueGenres = [
    ...new Set(watchlist.flatMap((movie) => movie.genre_ids)),
  ]
    .map((id) => genre.find((g) => g.id === id))
    .filter(Boolean);

  return (
    <>
      <div className="w-full h-[20vh] flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
          className="border border-gray-400 rounded px-4 py-2 w-[100vh] focus:outline-none hover:border-blue-100 focus:border-blue-200 border-2"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGenre(null)}
            className={`px-4 py-2 rounded ${
              selectedGenre === null ? "bg-blue-600" : "bg-blue-400"
            } text-white`}
          >
            All Genres
          </button>
          {uniqueGenres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre.id)}
              className={`px-4 py-2 rounded ${
                selectedGenre === genre.id ? "bg-blue-600" : "bg-blue-400"
              } text-white`}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-lg m-8">
        <table className="w-full text-gray-500 text-center border-gray-200 border-2 border-collapse">
          <thead>
            <tr>
              <th className="border-gray-200 border-2 px-4 py-2">Name</th>
              <th className="border-gray-200 border-2 px-4 py-2">
                <div className="flex flex-row justify-center items-center gap-2">
                  <i
                    onClick={sortDecreasing}
                    className="fa-solid fa-arrow-up cursor-pointer"
                  ></i>
                  <span>Rating</span>
                  <i
                    onClick={sortIncreasing}
                    className="fa-solid fa-arrow-down cursor-pointer"
                  ></i>
                </div>
              </th>
              <th className="border-gray-200 border-2 px-4 py-2">
                <div className="flex flex-row justify-center items-center gap-2">
                  <i
                    onClick={sortDecreasingPopularity}
                    className="fa-solid fa-arrow-up cursor-pointer"
                  ></i>
                  <span>Popularity</span>
                  <i
                    onClick={sortIncreasingPopularity}
                    className="fa-solid fa-arrow-down cursor-pointer"
                  ></i>
                </div>
              </th>

              <th className="border-gray-200 border-2 px-4 py-2">Genre</th>
              <th className="border-gray-200 border-2 px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter(
                (movieObj) =>
                  movieObj.title.toLowerCase().includes(search.toLowerCase()) &&
                  (selectedGenre === null ||
                    movieObj.genre_ids.includes(selectedGenre))
              )

              .map((movieObj, index) => (
                <tr key={index} className="hover:bg-blue-100">
                  <td className="border-gray-200 border-2 px-4 py-2 flex items-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                      alt="Movie Poster"
                      className="w-[80px] h-[80px] rounded-md"
                    />
                    <span className="ml-4">{movieObj.title}</span>
                  </td>
                  <td className="border-gray-200 border-2 px-4 py-2">
                    {movieObj.vote_average}
                  </td>
                  <td className="border-gray-200 border-2 px-4 py-2">
                    {movieObj.popularity}
                  </td>
                  <td className="border-gray-200 border-2 px-4 py-2">
                    {getGenreNames(movieObj.genre_ids)}
                  </td>
                  <td
                    className="border-gray-200 border-2 px-4 py-2 text-red-500 cursor-pointer"
                    onClick={() => removeFromWatchlist(movieObj.id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
