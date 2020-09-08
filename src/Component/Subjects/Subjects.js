import React from 'react';
import './Subject.css';

const Subjects = props => {
    const {id, course_name, description, price, image} = props.subject;

return (
    <div className='subject_body'>
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt={course_name}></img>
            <div className='card-header d-flex justify-content-between'>
                <h5 className='card-title'><span>{id}. </span>{course_name}</h5>
                <h5>${price}</h5>
            </div>
            <div className='card-body'>
                <p className='card-text'>{description}</p>
                <button 
                    onClick={() => props.handleCart(props.subject)}
                    className='btn btn-warning'
                    >
                        Enroll Now >>
                    </button>               
            </div>
        </div>
    </div>
);
};

export default Subjects;