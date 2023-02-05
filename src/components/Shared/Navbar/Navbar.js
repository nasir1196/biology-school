import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import i18next from 'i18next';

const Navbar = () =>
{

    const handleChange = ( e ) =>
    {
        i18next.changeLanguage( e.target.value );
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand brand-logo" to="/" >Biology School</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/link">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle cat" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu categories">
                                    <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/other">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/some">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/disable" className="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">

                            <div>
                                <select onChange={ ( e ) => handleChange( e ) }>
                                    <option >Select Language</option>
                                    <option value={ "en" }>English</option>
                                    <option value={ "bn" }>বাংলা</option>
                                </select>
                            </div>

                            <button className="btn m-2 btn-outline-danger" type="button">Long in</button>
                        </form>

                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;