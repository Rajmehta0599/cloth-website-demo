import React from 'react';
import"./Home.css";
import { NavLink } from 'react-router-dom';
function Home() {
    return (
        <>
            <section class="showcase">
                <div class="content">
                    <h1><span className='headcolor'>True style never dies</span></h1>
                    <h3>"Be unique - Be brave - Be divine"</h3>
                    <NavLink to={'/shirt'} className="btn1">Shop Now</NavLink>
                </div>
            </section>

            <section id="about">
                <h1 className='mainh1'><i>Creating a community for impact</i></h1>
                <p><i>We has grown from 5 people in a coffee shop to over 10,000 across the globe. With millions of businesses powered by us, we invest in our people and our communities.Our Social Impact initiatives focus on enabling an equitable future by building products and programs to support our team and merchants.</i></p>
            </section>
        </>
    );
}
export default Home;