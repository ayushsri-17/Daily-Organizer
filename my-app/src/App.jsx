import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Hero from './Hero';
import Items from './Items';
import LoginForm from './LoginPage';
import './App.css';

function App() {
  return (

    
  
      <Router>
        <div className='bgimg'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Items" element={<Items />} />
            <Route path="/LoginPage" element={<LoginForm />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
