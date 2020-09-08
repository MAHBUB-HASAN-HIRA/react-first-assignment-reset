import React, { useState, useEffect } from 'react';
import './Courses.css';
import Subjects from '../Subjects/Subjects';
import './Courses.css';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/fakeData.json';
import CourseCalculate from '../courseCalculate/CourseCalculate';

const Courses = () => {
    const [subjects, setSubjects] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleCart = subjects => {
       const newCart = [...cart, subjects];
       setCart(newCart); 
    }

const cartCalculate = cart

return (
    <div className='course_body'>
        <div className="course_container">
            {
                subjects.map(subject => <Subjects handleCart={handleCart} subject={subject}></Subjects>)
            }
        </div>
        <div className="cart_container">

            <CourseCalculate  cartCalculate = {cartCalculate}></CourseCalculate>   
            
            {
                cart.map(cart => <Cart cart ={cart}></Cart>)
            }
        </div>
    </div>
);
};

export default Courses;