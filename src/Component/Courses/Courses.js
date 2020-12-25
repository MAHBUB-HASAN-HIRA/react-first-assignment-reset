import React, { useEffect, useState} from 'react';
import './Courses.css';
import Subjects from '../Subjects/Subjects';
import './Courses.css';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/fakeData.json';
import CourseCalculate from '../courseCalculate/CourseCalculate';

const Courses = () => {
    const [subjects] = useState(fakeData);
    const [cart, setCart] = useState([]);


const handleSetSession = cartArray => {
    const setId = cartArray.map(cartPd => {
        const IdObj = {
            id: cartPd.id
        };
        return IdObj;
    });
    sessionStorage.setItem('cart', JSON.stringify(setId));
};

    const handleCart = subject => {
        const sameProduct = cart.find(product => product.id === subject.id);
        if(!sameProduct){
            const newCart = [...cart, subject];
            setCart(newCart);
            handleSetSession(newCart);
        }
        else{
            alert('You already select this course.')
        }
    }

const handleDelete = id =>{
    const confirmBtn = window.confirm('Are you sure to delete this course');
    if(confirmBtn){
        const removedProduct = cart.filter(product => product.id !== id);
        setCart(removedProduct);
        handleSetSession(removedProduct);
    }
}

const cartCalculate = cart;

useEffect(() =>{
    const cartItem = JSON.parse(sessionStorage.getItem('cart'));
    const loadData = cartItem.map(cartPd => {
        let cartItem;
            for (let i = 0; i < subjects.length; i++) {
                const element = subjects[i];
                if(element.id === cartPd.id){
                    cartItem = element
                }
            };
        return cartItem;
    });
    setCart(loadData);
},[subjects]);

return (
    <div className='row'>
        <div className="col-lg-9 course_container">
            <div className='ml-auto mr-auto'>
                {
                    subjects.map(subject => <Subjects key={subject.id} handleCart={handleCart} subject={subject}></Subjects>)
                }
            </div>
        </div>
        <div className="col-lg-3 cart_container pl-0">
            <div>
                <CourseCalculate  cartCalculate = {cartCalculate}></CourseCalculate>   
                
                {
                    cart.map(cart => <Cart handleDelete={handleDelete} key={cart.id} cart ={cart}></Cart>)
                }
            </div>
        </div>
    </div>
);
};

export default Courses;