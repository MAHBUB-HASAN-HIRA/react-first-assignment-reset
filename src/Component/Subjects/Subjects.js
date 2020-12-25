import React from 'react';
import './Subject.css';

const Subjects = ({subject, handleCart}) => {

    const {id, course_name, description, price, image} = subject;

return (
    <div className='subject_body ml-auto mr-auto'>
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt={course_name}></img>
            <div className='card-header d-flex justify-content-between'>
                <h5 className='card-title'><span>{id}. </span>{course_name}</h5>
                <h5>${price}</h5>
            </div>
            <div className='card-body'>
                <p className='card-text'>{description}</p>
                <button 
                    onClick={() => handleCart(subject)}
                    className='btn btn-warning'
                    >
                        Enroll Now {'>>'}
                    </button>         
            </div>
        </div>
    </div>
);
};

export default Subjects;