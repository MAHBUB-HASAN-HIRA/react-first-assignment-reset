import React from 'react';
import './CourseCalculate.css';
const CourseCalculate = props => {

    const cart = props.cartCalculate;
    const totalCart = [...cart]
    const totalPrice = totalCart.reduce((total, cart) => total + cart.price , 0)

    
    return (
        <div className='cart_details'>
            <h1>Your Cart Details</h1>
            <hr/>
            <h4>Total Course: {totalCart.length}</h4>
            <h4>Total Price: ${totalPrice}</h4>
            <hr/>
        </div>
    );
};

export default CourseCalculate;