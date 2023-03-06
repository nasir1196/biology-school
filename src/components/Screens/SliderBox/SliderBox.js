import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import showPic1 from '../../../source/img/cart/cart1.jpg';
import showPic2 from '../../../source/img/cart/cart2.png';
import showPic3 from '../../../source/img/cart/cart3.jpg';
import showPic4 from '../../../source/img/cart/cart4.jpg';
import showPic5 from '../../../source/img/cart/cart5.png';
import showPic6 from '../../../source/img/cart/cart6.jpg';
import showPic7 from '../../../source/img/cart/cart7.png';
import showPic8 from '../../../source/img/cart/cart8.jpg';
import showPic9 from '../../../source/img/cart/cart9.jpg';
import { Link } from 'react-router-dom';


const SliderBox = () =>
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };


    const dataFile = [
        {
            id: 1,
            pics: showPic1,
            link: "/some9"
        },
        {
            id: 1,
            pics: showPic2,
            link: "/some8"
        },
        {
            id: 1,
            pics: showPic3,
            link: "/some7"
        },
        {
            id: 1,
            pics: showPic4,
            link: "/some6"
        },
        {
            id: 1,
            pics: showPic5,
            link: "/some5"
        },
        {
            id: 1,
            pics: showPic6,
            link: "/some4"
        },
        {
            id: 1,
            pics: showPic7,
            link: "/some3"
        },
        {
            id: 1,
            pics: showPic8,
            link: "/some2"
        },
        {
            id: 1,
            pics: showPic9,
            link: "/some1"

        },
    ];
    return (
        <div className='container my-7'>
            <Slider { ...settings }>
                {
                    dataFile.map( ( pics ) => (
                        <div className='m-2 px-2' key={ pics.id }>
                            <Link to={ pics.link }>
                                <img style={ { width: '100px' } } src={ pics.pics } alt="" />
                            </Link>
                        </div>
                    ) )
                }
            </Slider>
        </div>
    );
};

export default SliderBox;