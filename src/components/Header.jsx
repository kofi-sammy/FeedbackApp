import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = ({feed, bgColor, color}) => {
    const HeaderStyle = {
        backgroundColor: bgColor,
        color: color
    }
  return (
        <header style={HeaderStyle}>
            <div className='container'>
                <h1>{feed}</h1>
            </div>
            <nav>
                <ul>
                    <Link to="/about">About</Link>
                </ul>
            </nav>
        </header>
    );
};

Header.defaultProps = {
    feed: 'logo'
};

Header.propTypes ={
    feed: propTypes.string
}


export default Header;
