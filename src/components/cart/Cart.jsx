import React from 'react';

const Cart = ({carts}) => {
    return (
        <div className='bg-gray-100'>
            <h1 className=''>credit Hour Ranking: {carts.length} hr</h1>
            <div className='divider'></div>
            <div>Course Name</div>
            <div className='divider'></div>
            <div>Total credit Hour: 13</div>
            <div className='divider'></div>
            <div>Total Price: 400 USD</div>
        </div>
    );
};

export default Cart;