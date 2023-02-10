import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaReddit } from "react-icons/fa";

const Footer = () =>
{
    const year = new Date().getFullYear();
    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-between m-4 py-3'>
                <div style={ { fontSize: "3rem", fontWeight: "bolder" } }>Biology-School</div>
                <div>
                    <Link style={ { fontSize: "3rem", margin: "0.4rem" } } to="/">{ <FaFacebook /> }</Link>
                    <Link style={ { fontSize: "3rem", margin: "0.4rem" } } to="/">{ <FaTwitter /> }</Link>
                    <Link style={ { fontSize: "3rem", margin: "0.4rem" } } to="/">{ <FaLinkedin /> }</Link>
                    <Link style={ { fontSize: "3rem", margin: "0.4rem" } } to="/">{ <FaReddit /> }</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Biology for business</Link></li>
                    <li><Link to="/">Affiliate</Link></li>
                    <li><Link to="/">Open Biology</Link></li>
                    <li><Link to="/">Biology Advisor Councils</Link></li>
                    <li><Link to="/">Careers</Link></li>
                    <li><Link to="/">News</Link></li>

                </div>

                <div className="col-md-2">
                    <li><Link to="/">Blogs</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li><Link to="/">Help Center</Link></li>
                    <li><Link to="/">Security</Link></li>
                    <li><Link to="/">Media Kit</Link></li>
                </div>

                <div className="col-md-4">
                    <li><Link to="/">Terms of Service & Honor Code</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Cookie Policy</Link></li>
                    <li><Link to="/">Accessibility Policy</Link></li>
                    <li><Link to="/">Trademark Policy</Link></li>
                    <li><Link to="/">Modern Slavery Statement</Link></li>
                    <li><Link to="/">Sitemap</Link></li>
                    <li><Link to="/">Do Not Sell My Personal Information</Link></li>

                </div>
                <div className="col-md-3">

                    <li><Link to="/">Criteria Zone</Link></li>
                </div>
            </div>
            <div className='d-flex justify-content-between m-5'>
                <div>
                    <p className='text-center'>Copyright&copy; All Right Reserved - { year }</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='m-3'>Play Store</div>
                    <div className='m-3'>App Store</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;