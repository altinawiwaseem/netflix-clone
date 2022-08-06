import React, { useState, useEffect } from "react";
import axios from "../fetch";
import "./Row.css";
/* img base url */
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log("request", request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters" >
        {/* several row_posters */}
        {movies.map((movie) => (
          <img
          key={movie.id}
            className="row_poster"
            src={baseUrl + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
