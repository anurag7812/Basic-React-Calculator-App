import React from 'react';
import './App.css'
const LoginPage = () => {
    
    return ( 
        <div className='signup-container'>
            <div>
            <label className='labeltext'>Enter Username</label>
            <input type="email"/>
            </div>
            <div>
            <label className='labeltext'>Enter Password</label>
            <input type="password"/>
            </div>
            <br/>
            <button>Submit</button>
        </div>
     );
}
export default LoginPage;
