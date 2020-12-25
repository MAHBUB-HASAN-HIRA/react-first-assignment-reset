import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome Our Online Course</h1>
            <h3>A Trusted Organization</h3>
            <div className='input_container'>
                <input className='search_input' type="text" placeholder='Search Here' name="" id=""/>
                <button className="btn btn-success search_icon">Search <FontAwesomeIcon className="icon" icon={faSearch} /></button>
            </div>
            <h3 className='choose'>Choose Your Favorite Subjects</h3>
        </div>
    );
};

export default Header;