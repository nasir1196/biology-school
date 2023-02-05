import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { useTranslation } from 'react-i18next';

const Banner = () =>
{
    const { t } = useTranslation();
    const token = "werrtdyhtyu";
    return (
        <>

            <div className="banner-screen" >
                <div>
                    <div className="banner-title">
                        <h1>{ t( "bannerTitle" ) }</h1>
                    </div >
                    <div className="banner-description">
                        <h5>{ t( "description" ) }</h5>
                    </div>
                    <div className="banner-auth">
                        <div>
                            <li >
                                <Link to="/singup">Sign Up</Link>
                            </li>
                        </div>
                        <div>
                            <li >
                                <Link to="/singup">Sign Up</Link>
                            </li>
                        </div>
                    </div>
                </div >


            </div >

            {
                token ? ( <div>
                    <h1>{ t( "ecosystem" ) }</h1>
                    <input type="checkbox" name="hello1" id="hello1" value="somethings" /><label htmlFor="hello1">somethings</label><br />
                    <input type="checkbox" name="hello2" id="hello2" value="somethings" /><label htmlFor="hello2">somethings</label><br />
                    <input type="checkbox" name="hello3" id="hello3" value="somethings" /><label htmlFor="hello3">somethings</label><br />
                    <input type="checkbox" name="hello4" id="hello4" value="somethings" /><label htmlFor="hello4">somethings</label><br />
                    <button type="submit">Submit</button>
                </div> ) : ""
            }
        </>
    );
};

export default Banner;