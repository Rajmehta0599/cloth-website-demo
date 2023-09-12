import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
        <nav className='main'>
            <ul className='first'>
                <li><NavLink to={'/'} className={'navlink'}>Home</NavLink></li>
                <li><NavLink to={'/register'} className={'navlink'}>Register</NavLink></li>
                <li><NavLink to={'/login'} className={'navlink'}>Login</NavLink></li>
                <li><NavLink to={'/Shirt'} className={'navlink'}>Shirt</NavLink></li>
                <li><NavLink to={'/tshirt'} className={'navlink'}>Tshirt</NavLink></li>
            </ul>
        </nav>
        </>     
    );
}

export default Nav;