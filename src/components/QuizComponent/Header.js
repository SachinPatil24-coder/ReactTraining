import React from 'react';
import "./Header.css";

const Header = (props) => {
    const { questionsCount } = props;
    return (
        <div className='header'>
            <div className='question'>Total Question <span>{questionsCount}</span></div>
            <div className='timer'>&#128337; 11:00</div>
        </div>
    );

};

export default Header;
