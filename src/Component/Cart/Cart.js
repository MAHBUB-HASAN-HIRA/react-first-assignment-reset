import React from 'react';
import './Cart.css'

const Cart = props => {
    const {id, course_name, description, price, image} = props.cart;

    return (
        <div className='cart_body'>
             <div className="card cart" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt={course_name}></img>
            <div className='card-header d-flex justify-content-between'>
                <h5 className='card-title'><span>{id}. </span>{course_name}</h5>
                <h5>${price}</h5>
            </div>
            <div className='card-body'>
                <p className='card-text'>{description}</p>               
            </div>
        </div>
        </div>
    );
};

export default Cart;