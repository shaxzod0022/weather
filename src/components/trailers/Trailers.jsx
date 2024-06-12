import React, {useEffect, useState} from 'react';
import trailer from './Trailers.module.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createData} from '../../stors/counterMovie';

const Trailers = () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzIwNmE1MWY1Y2Q1YmE5OWRkMWNjZmFmNTc3NzQ2ZiIsInN1YiI6IjY2NDZmMmQwZjZkOGFjYzZlM2UwODk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iivHhfh2VixNfuJRLc9dyYbP-EB2irgEz2qjE5D5C8',
    },
  };

  const [movies, setMovies] = useState ([]);
  const [imgs, setImgs] = useState ([]);
  const getTrendingMovies = async () => {
    try {
      const respons = await axios.request (options);
      setMovies (respons.data.results);
      setImgs (respons.data.results.map (item => item.backdrop_path));
    } catch (error) {
      console.error (error);
    }
  };

  useEffect (() => {
    getTrendingMovies ();
  }, []);

  const [bgImg, setBgImg] = useState ([]);
  const mouseOver = imgIndex => {
    imgs.map ((item, index) => {
      if (index === imgIndex) {
        setBgImg (item);
      }
    });
  };

  const [btn, setBtn] = useState (0);
  const btnsArr = [
    {id: 0, title: 'Popular'},
    {id: 1, title: 'Streaming'},
    {id: 2, title: 'On TV'},
    {id: 3, title: 'For Rent'},
    {id: 4, title: 'In Theaters'},
  ];

  const dispatch = useDispatch ();
  const postStore = url => {
    let sendMovie = movies.filter (item => {
      if (item.backdrop_path === url) {
        return item;
      }
    });
    dispatch (createData (sendMovie[0]));
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.6) 0%, rgba(3, 37, 65, 0.6) 100%), url('https://image.tmdb.org/t/p/w500${bgImg}')`,
      }}
      className={trailer.container}
    >
      <div className={trailer.trailer__btns}>
        <h2>Latest Trailers</h2>
        <div className={trailer.btns}>
          <div className={trailer.bgDiv} style={{left: `${100 * btn}px`}} />
          {btnsArr.map (item => {
            return (
              <button
                style={btn === item.id ? {color: 'black'} : {color: '#00f7ff'}}
                onClick={() => setBtn (item.id)}
                key={item.id}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className={trailer.trailers__movie}>
        {movies.map ((item, index) => {
          return (
            <div key={index.toString ()} className={trailer.card}>
              {imgs.map ((img, imgIndex) => {
                if (imgIndex === index) {
                  return (
                    <Link
                      to={'/movie'}
                      className={trailer.card__img}
                      onClick={() => postStore (img)}
                    >
                      <img
                        onMouseOver={() => mouseOver (imgIndex)}
                        className={trailer.movie__img}
                        key={imgIndex}
                        src={`https://image.tmdb.org/t/p/w500${img}`}
                        alt=""
                      />
                    </Link>
                  );
                }
              })}
              <Link className={trailer.elipsis}>
                <i className="fa-solid fa-ellipsis" />
              </Link>
              <button className={trailer.play}>
                <i className="fa-solid fa-play" />
              </button>
              <Link className={trailer.card__title}>
                <h3>{item.original_title}</h3>
                <p>{item.media_type}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trailers;
