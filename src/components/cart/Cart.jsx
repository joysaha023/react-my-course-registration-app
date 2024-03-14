import React from 'react';
import { totalCredits } from '../courses/Courses';

const Cart = ({carts}) => {
    const credits =  carts.reduce((p, c) => p + c.credit, 0);
    return (
        <div className='bg-gray-100'>
            <h1 className=''>credit Hour Ranking: {totalCredits - credits} hr</h1>
            <div className='divider'></div>
            <div>
                <h4>Course Name</h4>
                <div>
                    <ul>
                        {
                            carts.map((c) => (<li key={c.id}>{c.name}</li>))
                        }
                    </ul>
                </div>
            </div>
            <div className='divider'></div>
            <div>Total credit Hour: {credits}</div>
            <div className='divider'></div>
            <div>Total Price: {carts.reduce((p, c) => p + c.price, 0)} USD</div>
        </div>
    );
};

export default Cart;