import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Course from './components/Screens/Course/Course';
import Signup from './components/authentication/Signup/Signup';
import Login from './components/authentication/Login/Login';
import ForgetForm from './components/authentication/ForgetForm/ForgetForm';



function App ()
{


  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <div style={ { marginBottom: "1.2rem" } }>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/course" element={ <Course /> } />
          <Route exact path="/signup" element={ <Signup /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/forgetForm" element={ <ForgetForm /> } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
