import React from 'react';
import ReactDOM from 'react';
import './App.css';

import { Navbar, CTA } from './components';
import { Features, Selects, Footer, Tabs } from './containers';
import Header from './containers/header/Header';

import { BrowserRouter as Router } from 'react-router-dom'; // 导入 BrowserRouter


const App = () => {
  return (
    <Router>
      <div className='App'>
          <div className='gradient__bg'>
              <Navbar />
              <Header />
          </div>
          <Features />
          <CTA />
          <Selects />
          <Tabs />
          <Footer />
      </div>
    </Router>
  )
}

export default App