import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Contenu } from './components/contenu/Contenu';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Searchbar } from './components/searchbar/Searchbar';
import './scss/global.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Searchbar />
        <Contenu />
        <Footer />
      </Router>
    </>
  );
};

export default App;
