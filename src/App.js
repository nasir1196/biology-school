import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Course from './components/Screens/Course/Course';
import Some from './components/Some';



function App ()
{


  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <div style={ { marginBottom: "4.9rem" } }>
          <Navbar />
        </div>


        <div style={ { height: "100vh" } }>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/course" element={ <Course /> } />
            <Route exact path="/some" element={ <Some /> } />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
