import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Movies from './Movies';

const Navigation = () => {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/*" Component={Home} />
          <Route path='/movie' Component={Movies}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
};

export default Navigation;
