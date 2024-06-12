import React from 'react';
import head from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className={head.header}>
      <div className={head.header__item}>
        <Link to={'/'} className={head.logo}>
          <img
            src="/img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
        </Link>
        <ul className={head.nav}>
          <li>
            <button>
              Movie
            </button>
          </li>
          <li>
            <button>
              TV Shows
            </button>
          </li>
          <li>
            <button>
              People
            </button>
          </li>
          <li>
            <button>
              More
            </button>
          </li>
        </ul>
      </div>
      <ul className={head.nav}>
        <li>
          <button className={head.plus}><i className="fa-solid fa-plus" /></button>
        </li>
        <li>
          <button className={head.language}>EN</button>
        </li>
        <li>
          <button><i className="fa-solid fa-bell" /></button>
        </li>
        <li>
          <button>Sign In</button>
        </li>
        <li>
          <button className={head.search}><i className="fa-solid fa-magnifying-glass" /></button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
