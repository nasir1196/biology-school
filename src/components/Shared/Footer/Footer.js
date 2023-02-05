import React from 'react';

const Footer = () =>
{
    const year = new Date().getFullYear();
    return (
        <div className='text-center'>Copyright&copy; All Right Reserved - { year }</div>
    );
};

export default Footer;