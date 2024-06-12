import React from 'react';
import mTop from './MovieTop.module.css';
import {Link} from 'react-router-dom';
const MovieTop = () => {
  return (
    <div className={mTop.container}>
      <ul className={mTop.nav}>
        <li>
          <Link>Overvirw</Link>
        </li>
        <li>
          <Link>Mendia</Link>
        </li>
        <li>
          <Link>Fandom</Link>
        </li>
        <li>
          <Link>Share</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieTop;
