import React, {useEffect, useState} from 'react';
import cast from './Casting.module.css';
import axios from 'axios';
const Casting = () => {
  const options = {
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIwNmE1MWY1Y2Q1YmE5OWRkMWNjZmFmNTc3NzQ2ZiIsInN1YiI6IjY2NDZmMmQwZjZkOGFjYzZlM2UwODk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iivHhfh2VixNfuJRLc9dyYbP-EB2irgEz2qjE5D5C8',
    },
  };

  const [castData, setCastDta] = useState ([]);

  const getCastData = async () => {
    try {
      let respons = await axios.request (options);
      setCastDta (respons.data.results);
    } catch (error) {
      console.error (error);
    }
  };
  useEffect (() => {
    getCastData ();
  });


  return (
    <div className={cast.container}>
      <h2>Top Billed Cast</h2>
      <div className={cast.box}>
        {castData.map ((item, index) => {
          return (
            <div key={index} className={cast.box__item}>
              <div className={cast.img}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className={cast.title}>
                <h3>{item.original_title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Casting;
