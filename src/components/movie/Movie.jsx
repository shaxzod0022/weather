import {React, useState, useEffect} from 'react';
import mCenter from './Movie.module.css';
import {useSelector} from 'react-redux';
import axios from 'axios';
const Movie = () => {
  let storeData = useSelector (data => data.counter.data);
  const [data, setData] = useState ([]);
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIwNmE1MWY1Y2Q1YmE5OWRkMWNjZmFmNTc3NzQ2ZiIsInN1YiI6IjY2NDZmMmQwZjZkOGFjYzZlM2UwODk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iivHhfh2VixNfuJRLc9dyYbP-EB2irgEz2qjE5D5C8',
    },
  };

  const getDataMovies = async () => {
    try {
      const respons = await axios.request (options);
      let dataApi = respons.data.results;
      dataApi.filter (item => {
        if (item.id === storeData[0]) {
          setData (item);
          localStorage.setItem('movies', JSON.stringify(item))
        } 
      });
    } catch (error) {
      console.error (error);
    }
  };

  useEffect (() => {
    getDataMovies ();
  }, []);
  return (
    <div className={mCenter.container}>
      <div
        className={mCenter.content}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.6) 0%, rgba(3, 37, 65, 0.6) 100%),url('https://image.tmdb.org/t/p/w500${data.backdrop_path}')`,
        }}
      >
        <div className={mCenter.img} key={data.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt=""
          />
        </div>
        <div className={mCenter.titles}>
          <h2>{data.original_title} (2024)</h2>
          <div className={mCenter.info}>
            {data.release_date}
            (
            {data.original_language}
            ) - Action, Komedy
          </div>
          <div className={mCenter.average}>
            <button>{Math.floor (data.vote_average * 10)}%</button>
            <span>User Score</span>
            <button>What's your <span>vibe?</span></button>
          </div>
          <div className={mCenter.likes__buttons}>
            <button className={mCenter.bar}>
              <i className="fa-solid fa-bars" />
            </button>
            <button className={mCenter.like}>
              <i class="fa-solid fa-heart" />
            </button>
            <button className={mCenter.clipboard}>
              <i class="fa-solid fa-clipboard" />
            </button>
            <button className={mCenter.play}>
              <i class="fa-solid fa-play" /><span>Play trailer</span>
            </button>
          </div>
          <p>The real monsters aren't under the bed.</p>
          <h4>Overview</h4>
          <p>{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
