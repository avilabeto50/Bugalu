import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );}

export default App;

