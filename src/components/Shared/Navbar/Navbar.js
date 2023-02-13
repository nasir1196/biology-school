import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import i18next, { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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


    const [ navbar, setNavbar ] = useState( false );
    const changeBackground = () =>
    {
        if ( window.scrollY > 20 )
        {
            setNavbar( true );
        } else
        {
            setNavbar( false );
        }
    };

    window.addEventListener( "scroll", changeBackground );
    return (
        <>
            <header style={ navbar ? { background: "#090418", color: "#ffffff" } : { background: "#ffffff" } }>
                <Link style={ navbar ? { color: "#ffffff" } : { color: "black" } } className='brand-logo' to="/">Biology-School</Link>

                <input type="checkbox" name="" id="menu-bar" />
                <label htmlFor="menu-bar">Menu</label>
                <nav className='navigation'>
                    <ul>
                        <li><Link style={ navbar ? { color: "#ffffff" } : { color: "black" } } to="/course">{ t( 'courses' ) } </Link>
                            <ul>
                                <div className='item-flex'>
                                    <div>
                                        <li>
                                            <Link to="/botany">a. Botany</Link>
                                        </li>
                                        <li>
                                            <Link to="/zoology">b. Zoology</Link>
                                        </li>
                                        <li>
                                            <Link to="/microbiology">c. Microbiology</Link>
                                        </li>
                                        <li>
                                            <Link to="/biotechnology">d. Biotechnology</Link>
                                        </li>

                                        <li>
                                            <Link to="/parasitology">e. Parasitology</Link>
                                        </li>
                                        <li>
                                            <Link to="/genetics">f. Genetics </Link>
                                        </li>
                                    </div>

                                    <div>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>

                                    <div>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li><Link style={ navbar ? { color: "#ffffff" } : { color: "black" } } to="/">{ t( 'programsCategory' ) }</Link>
                            <ul>
                                <div className='item-flex'>
                                    <div>
                                        <li>
                                            <Link to="/botany">a. Botany</Link>
                                        </li>
                                        <li>
                                            <Link to="/zoology">b. Zoology</Link>
                                        </li>
                                        <li>
                                            <Link to="/microbiology">c. Microbiology</Link>
                                        </li>
                                        <li>
                                            <Link to="/biotechnology">d. Biotechnology</Link>
                                        </li>

                                        <li>
                                            <Link to="/parasitology">e. Parasitology</Link>
                                        </li>
                                        <li>
                                            <Link to="/genetics">f. Genetics </Link>
                                        </li>
                                    </div>

                                    <div>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>

                                    <div>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li><Link style={ navbar ? { color: "#ffffff" } : { color: "black" } } to="/">{ t( 'readingMaterials' ) }</Link>
                            <ul>
                                <div className='item-flex'>
                                    <div>
                                        <li>
                                            <Link to="/botany">a. Botany</Link>
                                        </li>
                                        <li>
                                            <Link to="/zoology">b. Zoology</Link>
                                        </li>
                                        <li>
                                            <Link to="/microbiology">c. Microbiology</Link>
                                        </li>
                                        <li>
                                            <Link to="/biotechnology">d. Biotechnology</Link>
                                        </li>

                                        <li>
                                            <Link to="/parasitology">e. Parasitology</Link>
                                        </li>
                                        <li>
                                            <Link to="/genetics">f. Genetics </Link>
                                        </li>
                                    </div>

                                    <div>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>

                                    <div>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li><Link style={ navbar ? { color: "#ffffff" } : { color: "black" } } to="/">{ t( 'olympiad1' ) }</Link>
                            <ul>
                                <div className='item-flex'>
                                    <div>
                                        <li>
                                            <Link to="/botany">a. Botany</Link>
                                        </li>
                                        <li>
                                            <Link to="/zoology">b. Zoology</Link>
                                        </li>
                                        <li>
                                            <Link to="/microbiology">c. Microbiology</Link>
                                        </li>
                                        <li>
                                            <Link to="/biotechnology">d. Biotechnology</Link>
                                        </li>

                                        <li>
                                            <Link to="/parasitology">e. Parasitology</Link>
                                        </li>
                                        <li>
                                            <Link to="/genetics">f. Genetics </Link>
                                        </li>
                                    </div>

                                    <div>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>

                                    <div>

                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                        <li>
                                            <Link to="/biochemistry">g. Biochemistry </Link>
                                        </li>
                                        <li>
                                            <Link to="/cell-biology">h. Cell Biology </Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </li>


                        <li>

                            <div className='input-select-button'>
                                <input type="search" style={ { margin: "2px", borderRadius: "1rem", border: "2px solid green", outline: "none" } } name="search" id="search" placeholder={ t( "search" ) } onChange={ ( e ) => handleSearch( e ) } />


                                <select style={ { margin: "2px", borderRadius: "1rem", border: "2px solid #4c3e3e", outline: "none" } } aria-label=".form-select-lg " onChange={ ( e ) => handleChange( e ) }>
                                    <option value={ "en" }>En</option>
                                    <option value={ "bn" }>বাং</option>
                                </select>

                                <button style={ { margin: "2px", } } className="btn btn-outline-danger" type="button">{ t( "sign" ) }</button>
                            </div>

                        </li>

                    </ul>

                </nav>
            </header>
        </>
    );
};

export default Navbar;