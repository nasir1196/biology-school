import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = () =>
{
    return (
        <div className='nav-data'>
            <ul>
                <li><Link to="/graphics-design">Agriculture</Link></li>
                <li><Link to="/language-courses">Biology</Link></li>
                <li><Link to="/web-design">Agriculture</Link></li>
                <li><Link to="/photography">Biology</Link></li>
                <li><Link to="/data-entry">Agriculture</Link></li>
                <li><Link to="/english-learning">Biology</Link></li>
                <li><Link to="/ielts">Agriculture</Link></li>
                <li><Link to="/digital-marketing">Biology</Link></li>
            </ul>
        </div>
    );
};

export default NavItem;