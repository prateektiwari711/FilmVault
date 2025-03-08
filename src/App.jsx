import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies watchlist={watchlist} setWatchlist={setWatchlist} />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
