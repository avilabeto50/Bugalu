import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
   
      <div className="App">
      <Header/>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </Router>
        <Footer />
      </div>

  )}

  export default App