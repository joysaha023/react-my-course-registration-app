import React from 'react';
import { totalCredits } from '../courses/Courses';

const Cart = ({carts}) => {
    const credits =  carts.reduce((p, c) => p + c.credit, 0);
    return (
        <div className='bg-gray-100 rounded-lg'>
            <h1 className='text-xl text-center font-semibold pt-5'>Credit Hour Ranking: {totalCredits - credits} hr</h1>
            <div className='divider'></div>
            <div className='text-center'>
                <h4 className=''>Course Name</h4>
                <hr className='border-2' />
                <div className='mt-1'>
                    <ul className='text-base'>
                        {
                            carts.map((c) => (<li key={c.id}>{c.name}</li>))
                        }
                    </ul>
                </div>
            </div>
            <div className='divider'></div>
            <div className='text-center'>Total credit Hour: {credits}</div>
            <div className='divider'></div>
            <div className='text-center pb-6'>Total Price: {carts.reduce((p, c) => p + c.price, 0)} USD</div>
        </div>
    );
};

export default Cart;