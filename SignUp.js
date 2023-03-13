import React from 'react';
import './App.css'
const SignUp = () => {
    return ( 
        <div className='signup-container'>
            <div>
            <label className='labeltext'>Enter Username</label>
            <br/>
            <input type="email" className='inputtag'/>
            </div>
            <div>
            <label className='labeltext'>Enter Password</label>
            <br/>
            <input type="password" className='inputtag'/>
            </div>
            <div>
            <label className='labeltext'>Enter DOB</label>
            <br/>
            <input type="date" className='inputtag'/>
            </div>
            <br/>
            <button>Submit</button>
        </div>
     );
}
export default SignUp;
