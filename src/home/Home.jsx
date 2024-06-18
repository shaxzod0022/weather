import React, {useEffect, useState} from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState ([]);
  const [value, setValue] = useState ('');

  const btnValue = id => {
    arrBtn.map (item => {
      if (item.id === id) {
        setValue (item.cityName);
        getData ();
      }
    });
    setModal (true);
  };

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: value},
    headers: {
      'X-RapidAPI-Key': 'f2ff172e08mshcb37c63f99dfc3dp168287jsn2e467c427c7e',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  async function getData () {
    try {
      const response = await axios.request (options);
      setData (response.data.current);
    } catch (error) {
      console.error (error);
    }
  }

  const arrBtn = [
    {
      id: 0,
      cityName: 'Tashkent',
      btnName: 'Toshkent',
    },
    {
      id: 1,
      cityName: 'andijan',
      btnName: 'Andijon',
    },
    {
      id: 3,
      cityName: 'fergana',
      btnName: "Farg'ona",
    },
    {
      id: 4,
      cityName: 'jizzax',
      btnName: 'Jizzax',
    },
    {
      id: 5,
      cityName: 'surhandarya',
      btnName: 'Surxondaryo',
    },
    {
      id: 6,
      cityName: 'Qashqadaryo',
      btnName: 'Qashqadaryo',
    },
    {
      id: 7,
      cityName: 'samarkand',
      btnName: 'Samarqand',
    },
    {
      id: 8,
      cityName: 'namangan',
      btnName: 'Namangan',
    },
    {
      id: 9,
      cityName: 'bukhara',
      btnName: 'Buxoro',
    },
    {
      id: 10,
      cityName: 'navai',
      btnName: 'Navoiy',
    },
    {
      id: 11,
      cityName: 'khorezm',
      btnName: 'Xorazm',
    },
    {
      id: 12,
      cityName: 'kepublic of karakalpakistan',
      btnName: "Qoraqalpog'iston",
    },
  ];

  let infoWathers = [
    {
      id: 0,
      item: 'Namlik',
      itemInfo: 'blabla',
    },
    {
      id: 1,
      item: 'Shamol',
      itemInfo: 'blabla',
    },
    {
      id: 2,
      item: 'vozduxa',
      itemInfo: 'blabla',
    },
    {
      id: 3,
      item: 'Yomgir',
      itemInfo: 'blabla',
    },
    {
      id: 4,
      item: 'Harorat',
      itemInfo: 'blabla',
    },
    {
      id: 5,
      item: 'Zakon',
      itemInfo: 'blabla',
    },
  ];

  const [modal, setModal] = useState (true);
  const handleBtn = item => {
    item === true ? setModal (false) : setModal (true);
  };

  return (
    <div className="container">
      <ul
        style={modal === true ? {transition: 'all 0.4s ease'} : {left: '10px'}}
        className="modal__menyu nav"
      >
        {arrBtn.map (item => {
          return (
            <li key={item.id}>
              <button onClick={() => btnValue (item.id)}>{item.btnName}</button>
            </li>
          );
        })}
      </ul>
      <div className="menyu">
        <h1>Weather</h1>
        <h2>Province</h2>
        <ul className="nav">
          {arrBtn.map ((item, index) => {
            return (
              <li key={index}>
                <button onClick={() => btnValue (item.id)}>
                  {item.btnName}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="weather__info">
        <div className="modal__btn">
          <button onClick={() => handleBtn (modal)}>
            <i className="fa-solid fa-bars" />
          </button>
          <h1>Weather</h1>
        </div>
        <h2>Check out today's weather information</h2>
        <div className="weather__main">
          <img src="/img/Nuvola_weather_sunny.svg.png" alt="" />
          <h4>Monday</h4>
          <p><span /> Sunny</p>
          <div>
            <strong>{data.temp_c} C<sup>o</sup></strong>
          </div>
        </div>
        <p className="details">More details of today's weather</p>
        <div className="box">
          {infoWathers.map (item => {
            return (
              <div key={item.id} className="box__item">
                <h3>{item.item}</h3>
                <strong>{item.itemInfo}</strong>
              </div>
            );
          })}
        </div>
      </div>
      <div className="date">
        <h2>May</h2>
        <div className="date__box">
          <table>
            <tr>
              <th>D</th>
              <th>S</th>
              <th>CH</th>
              <th>P</th>
              <th>J</th>
              <th>SH</th>
              <th>Y</th>
            </tr>
            <tr>
              <td />
              <td />
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
            </tr>
            <tr>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
            </tr>
            <tr>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td />
              <td />
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
