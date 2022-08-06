import React, { useState, useEffect } from "react";
import axios from "../fetch"

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
const a = 5
console.log(a) 


   useEffect(()=>{
async function fetchData (){
const request = await axios.get(fetchUrl)
console.log("request",request.data.results)
setMovies(request.data.results)
return request
}
fetchData();
   },[fetchUrl])


  return (
    <div className="row">
      <h2>{title }</h2>
      <div className="row_posters"></div>
      {/* several row_posters */}
      {movies.map(item => item.name)}

    </div>
  );
}

export default Row;
