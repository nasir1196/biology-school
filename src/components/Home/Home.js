import React from 'react';
import './Home.css';
import Banner from '../Screens/Banner/Banner';
import SliderBox from '../Screens/SliderBox/SliderBox';
import Card from './../Screens/Card/Card';

const Home = () =>
{
    return (
        <div>
            <Banner />
            <SliderBox />
            <Card />
        </div>
    );
};

export default Home;