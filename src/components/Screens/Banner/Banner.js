import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { useTranslation } from 'react-i18next';

const Banner = () =>
{
    const { t } = useTranslation();
    return (
        <div style={ { background: "#E1DDDB" } } className="py-10 banner-screen">
            <div className="container grid grid-cols-3">
                <div className='flex justify-center'>
                    <div className='mt-10'>
                        <div className='text-4xl font-extrabold'>
                            <h1>{ t( "bannerTitle" ) }</h1>
                            <h1>make of it. Make it</h1>
                            <h1>yours at Biology-School.</h1>
                        </div>
                        <div className='m-5'>
                            <form>
                                <div className="flex">
                                    <input type="search" id="default-search" className="block w-full px-5 py-2.5 mr-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search our 3000+ courses" required />
                                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Search</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <Link to="/">Explore all courses</Link>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className='flex justify-center' style={ { backgroundImage: `url( 'https://source.unsplash.com/oWTW-jNGl9I/600x800' )`, height: "70vh" } }>

                </div>
            </div>
        </div>
    );
};

export default Banner;