import React, {useEffect, useState} from 'react';
import search from './SearchHome.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SearchHome = () => {
  const [data, setData] = useState ([]);
  const options = {
    url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIwNmE1MWY1Y2Q1YmE5OWRkMWNjZmFmNTc3NzQ2ZiIsInN1YiI6IjY2NDZmMmQwZjZkOGFjYzZlM2UwODk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iivHhfh2VixNfuJRLc9dyYbP-EB2irgEz2qjE5D5C8',
    },
  };

  const getMovieBgImg = async () => {
    try {
      const respons = await axios.request (options);
      setData (respons.data.results.map (item => item.backdrop_path));
    } catch (error) {
      console.error (error);
    }
  };

  useEffect (() => {
    getMovieBgImg ();
  }, []);

  const [img, setImg] = useState ();

  window.addEventListener ('load', () => {
    let rand = Math.floor (Math.random () * 10);
    let imgs = data[rand];
    setImg (imgs);
  });

  return (
    <div className={search.container}>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.6) 0%, rgba(3, 37, 65, 0.6) 100%), url('https://image.tmdb.org/t/p/w500${img}')`,
        }}
        className={search.container__top}
      >
        <h1>Welcome.</h1>
        <p>
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className={search.search__movie}>
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
          />
          <button>Search</button>
        </div>
      </div>
      <div className={search.search__bottom}>
        <div>
          <img
            className={search.oscar__img}
            src="/img/oscars-2024-title-f69161f90ed90871e9fe79439ea7e9280e03f3cb896b8d35d5d37b6711d00913.svg"
            alt=""
          />
        </div>
        <div>
          <Link className={search.oscar__movie}>
            <span>View the winners</span>
            <span><i className="fa-solid fa-arrow-right" /></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchHome;
