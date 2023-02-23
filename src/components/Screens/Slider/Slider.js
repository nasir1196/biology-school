import React from 'react';

import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

const Slider = () =>
{
    return (
        <div>
            <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                <img className="w-full rounded" src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200" alt="pics" />
                <img className="w-full rounded" src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200" alt="pics" />
                <img className="w-full rounded" src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200" alt="pics" />
                <img className="w-full rounded" src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200" alt="pics" />

            </SlideshowLightbox>
        </div>
    );
};

export default Slider;