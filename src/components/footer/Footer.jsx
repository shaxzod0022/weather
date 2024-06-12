import React from 'react';
import fot from './Footer.module.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  const arr = [
    {
      title: 'THE BASICS',
      link: [
        'About TMDB',
        'Contact Us',
        'Support Forums',
        'API',
        'System Status',
      ],
    },
    {
      title: 'GET INVOLVED',
      link: ['Contribution Bible', 'Add New Movie', 'Add New TV Show'],
    },
    {
      title: 'COMMUNITY',
      link: ['Guidelines', 'Discussions', 'Leaderboard'],
    },
    {
      title: 'LEGAL',
      link: [
        'Terms of Use',
        'API Terms of Use',
        'Privacy Policy',
        'DMCA Policy',
      ],
    },
  ];
  return (
    <div className={fot.container}>
      <div className={fot.footer__item}>
        <div>
          <img
            src="/img/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt=""
          />
        </div>
        <div><button>Hi User</button></div>
      </div>
      {arr.map ((item, index) => {
        return (
          <div key={index} className={fot.footer__link__item}>
            <h3 className={fot.footer__item__titles}>{item.title}</h3>
            <ul className={fot.nav}>
              <li className={fot.nav__item}>
                <Link>{item.link[0]}</Link>
              </li>
              <li className={fot.nav__item}>
                <Link>{item.link[1]}</Link>
              </li>
              <li className={fot.nav__item}>
                <Link>{item.link[2]}</Link>
              </li>
              <li className={fot.nav__item}>
                <Link>{item.link[3]}</Link>
              </li>
              <li className={fot.nav__item}>
                <Link>{item.link[4]}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
