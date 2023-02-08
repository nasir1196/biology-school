import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import NavItem from './components/Shared/NavItem/NavItem';


function App ()
{


  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Navbar />
        {/* <div className="mt-5">
          <NavItem />
        </div> */}

        <div className='page-height'>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
