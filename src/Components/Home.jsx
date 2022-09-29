import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import MoviesCard from "./MoivesCard";

export default function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  // const [page, setPage] = useState(1);

  const getData = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=1"
      );
      const bannerData = await response.json();
      setData(bannerData.results);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    <div className="loader">
      <CircularProgress />
    </div>;
  }

  return (
    <>
      <div className="card-container">
        {data.map((val, index) => {
          return (
            <div className="movie-card" key={index}>
              <MoviesCard val={val} />
            </div>
          );
        })}
      </div>
    </>
  );
}
