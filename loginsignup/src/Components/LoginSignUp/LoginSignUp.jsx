import React from 'react';
import './LoginSignUp.css';
import { FaUserSecret } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

const LoginSignUp = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Welcome To IDPR</h1>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='IDPR Username' required />
                    <FaUserSecret className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='IDPR Password' required />
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label> <input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an IDPR account yet? <a href="#">Register </a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginSignUp;
