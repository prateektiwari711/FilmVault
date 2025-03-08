import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Pagination from "./pagination";

function Movies({ watchlist, setWatchlist }) {
  const [movies, setMovies] = useState([]);
  const [page, setPageNo] = useState(1);

  function toggleWatchlist(movie) {
    if (watchlist.some((m) => m.id === movie.id)) {
      setWatchlist(watchlist.filter((m) => m.id !== movie.id));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  }

  function handlePrev() {
    if (page > 1) {
      setPageNo(page - 1);
    }
  }

  function handleNext() {
    setPageNo(page + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=541ae66c220cd33b08b3dd786ea7d4b4`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [page]);

  return (
    <>
      <div className="w-full flex justify-center items-center text-2xl py-4 font-bold">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Cards
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              isAdded={watchlist.some((m) => m.id === movie.id)}
              toggleWatchlist={() => toggleWatchlist(movie)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext} />
    </>
  );
}

export default Movies;
