import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar(props) {
    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <Link className='link' to='/'>
                    <li className='navbar__element'>Home</li>
                </Link>
                <Link  className='link' to='/world'>
                    <li className='navbar__element'>World</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;