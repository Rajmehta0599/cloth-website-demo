import React from 'react';
import './Thankyou.css';
function Thankyou() {
    return (
        <>
            <div class="wrapper-2">
                <h1>Thank you !</h1>
                <p>Thanks for purchase our products.  </p>
                <p>We hope you like our products </p>
                {/* <button class="go-home" > 
                    go home
                </button> */}
            </div>
            <div class="footer-like">
                <p>Email not received?
                    <a href="register">Click here to send again</a>
                </p>
            </div>
        </>
    );
}

export default Thankyou;