import React from 'react';

const CourseCalculate = props => {
    const cart = props.cartCalculate;
    const totalCart = [...cart]
    const totalPrice = totalCart.reduce((total, cart) => total + cart.price , 0)
    return (
        <div className='mt-3'>
            <h1 className='pl-3'>Your Cart Details</h1>
            <hr/>
            <div className='pl-3'>
                <h4>Total Course: {totalCart.length}</h4>
                <h4>Total Price: ${totalPrice}</h4>
            </div>
            <hr/>
        </div>
    );
};

export default CourseCalculate;