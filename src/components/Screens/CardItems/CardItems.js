import React from 'react';

const CardItems = ( { items } ) =>
{
    return (
        <div key={ items.id } style={ { border: "1px solid yellow", boxShadow: "5px 5px 5px 5px gray", margin: "0.5rem", borderRadius: "10px 20px 10px 20px" } }>
            <div>
                <div>
                    <img src={ items.photos } alt="cart photos" style={ { borderRadius: "10px 20px 0px 0px", height: "15rem", width: "100%" } } />
                </div>
                <div className='m-5'>
                    <div>
                        <h1 className='text-3xl font-extrabold'>{ items.name }</h1>
                    </div>
                    <div>
                        <p>{ items.description }</p>
                        <p>{ items.company }</p>
                        <p>{ items.author }</p>
                    </div>
                </div>
                <div className="m-4 flex justify-between">
                    <h1>Price: ${ items.price }</h1>
                    <button type='button' style={ { border: "1px solid red", borderRadius: "0.5rem", boxShadow: '3px 3px 3px 3px green', background: 'gray', padding: "4px" } }>Buy Now</button>

                </div>

            </div>
        </div>
    );
};

export default CardItems;