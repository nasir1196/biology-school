import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { useTranslation } from 'react-i18next';

const Banner = () =>
{
    const { t } = useTranslation();
    return (
        <>
            <div className='banner-bg'>

                <div className="row">
                    <div className="col-md-8 ">
                        <div className="left-side-container">
                            <div>

                                <h1 >Learning is what you</h1>
                                <h1>make of it. Make it</h1>
                                <h1>yours at Biology-School.</h1>
                                <input type="search" name="search" id="search" />
                                <button type="submit">Search</button>
                                <h3><Link to="/full-course">Explore all courses</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner-bg-side">

                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Banner;