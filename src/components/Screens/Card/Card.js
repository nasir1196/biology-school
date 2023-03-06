import React from 'react';
import { carData } from '../CardItems/cardData';
import CardItems from './../CardItems/CardItems';

const Card = () =>
{
    return (
        <div>
            <h1 className='font-extrabold text-4xl py-10 text-center hover:text-green-700'>Our Latest Courses Plus...</h1>
            <div style={ { display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", marginTop: "2rem", marginBottom: "1rem" } }>
                {
                    carData.map( ( item ) => (
                        <div key={ item.id }>
                            <CardItems items={ item } />
                        </div>
                    ) )
                }
            </div>
        </div>

    );
};

export default Card;