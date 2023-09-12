import React from 'react';
import { NavLink } from 'react-router-dom';

function Productpage() {
    return ( 
    <>
    <NavLink to={"/Productpage"}>
    <div className='shirt'>
        <img src='shirt-0.jpg' alt='Shirt image'></img>
        <div className='shirt-main'>
            <p>
            <i>We Sell Our Best Quality Shirts In Affordable Price </i> 
            </p>
        </div>

    </div>
    </NavLink>
    </>
     );
}

export default Productpage;