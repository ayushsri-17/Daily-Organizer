import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Hero from './LandingPage';
import Items from './Items';
import LoginForm from './LoginPage';


function App() {
  return (  
  
      <Router>
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/Items" element={<Items />} />
    <Route path="/LoginPage" element={<LoginForm />} />
  </Routes>
</Router>
  );
}

export default App;
