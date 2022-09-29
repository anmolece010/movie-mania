import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

export default function Banner() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getData = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=1"
      );
      const bannerData = await response.json();
      setData(bannerData.results[6]);
      console.log(bannerData);
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

  if (loader === true) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="container">
      <img
        className="banner-img"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      />
      <p className="img-text">{data.overview}</p>
    </div>
  );
}
