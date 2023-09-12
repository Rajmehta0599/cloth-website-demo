import React from 'react';
import './Login.css';

function Login() {
    return (  
        <>
        <div class="login-page">
        <div class="form">
          <form class="login-form" action='/login' method='post'>
            <input type="email" placeholder="Email" name='email'/>
            <input type="password" placeholder="Password" name='passw'/>
            <button>login</button>
            <p class="message">Not registered? <a href="Register">Create an account</a></p>
          </form>
        </div>
      </div>
        </>
    );
}

export default Login;