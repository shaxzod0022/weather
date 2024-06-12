import React, {useEffect, useState} from 'react';
import trend from '../trending/Trending.module.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Popular = () => {
  const [data, setData] = useState ([]);
  const [imgs, setImgs] = useState ([]);

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
      setData (respons.data.results);
      let imgs = respons.data.results.map (item => item.poster_path);
      setImgs (imgs);
    } catch (error) {
      console.error (error);
    }
  };

  useEffect (() => {
    getDataMovies ();
  }, []);

  const [btn, setBtn] = useState (0);
  let btnsArr = [{id: 0, title: 'Streaming'}, {id: 1, title: 'On TV'}];

  return (
    <div className={trend.container}>
      <div className={trend.container__item}>
        <h3>What's Popular</h3>
        <div className={trend.btns}>
          {btnsArr.map ((item, index) => {
            return (
              <button
                style={btn === index ? {color: 'white'} : {color: '#050d57'}}
                key={index}
                onClick={() => setBtn (item.id)}
              >
                {item.title}
              </button>
            );
          })}
          <div
            style={btn === 1 ? {left: '50%'} : {left: '0'}}
            className={trend.bgDiv}
          />
        </div>
      </div>
      <div className={trend.movies}>
        {data.map ((item, index) => {
          return (
            <div key={index} className={trend.card__movie}>
              <div className={trend.card__movie__imgs}>
                {imgs.map ((itemImg, indexImg) => {
                  if (index === indexImg) {
                    return (
                      <Link key={indexImg}>
                        <img
                          className={trend.movie__img}
                          src={`https://image.tmdb.org/t/p/w500${itemImg}`}
                          alt=""
                        />
                      </Link>
                    );
                  }
                })}
                <Link className={trend.elipsis}>
                  <i className="fa-solid fa-ellipsis" />
                </Link>
                <span className={trend.statistica}>
                  {Math.ceil (item.vote_average * 10)}%
                </span>
              </div>
              <div className={trend.card__movie__title}>
                <Link>{item.title}</Link>
                <span>{item.release_date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
