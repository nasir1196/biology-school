import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import i18next, { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const Navbar = () =>
{

    const { t } = useTranslation();
    const handleChange = ( e ) =>
    {
        i18next.changeLanguage( e.target.value );
    };

    const handleSearch = ( e ) =>
    {
        e.preventDefault();

        console.log( e.target.value );
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
                                <Link className="nav-link " to="/courses">{ t( "courses" ) }</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/programsCategory">{ t( "programsCategory" ) }</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/readingMaterials">{ t( "readingMaterials" ) }</Link>
                            </li>
                            <li className="nav-item" style={ { marginRight: '4rem' } } >
                                <input type="search" className="nav-link " style={ { width: "130%", borderRadius: "1rem", border: "2px solid green", outline: "none" } } name="search" id="search" placeholder={ t( "search" ) } onChange={ ( e ) => handleSearch( e ) } />
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/biologyOlympiad">{ t( 'olympiad1' ) }</Link>
                            </li>

                        </ul>
                        <form className="d-flex">

                            <div>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={ ( e ) => handleChange( e ) }>
                                    <option value={ "en" }>English</option>
                                    <option value={ "bn" }>বাংলা</option>
                                </select>
                            </div>

                            <div>
                                <button className="btn m-1 btn-outline-danger" type="button">{ t( "sign" ) }</button>
                            </div>
                        </form>

                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;