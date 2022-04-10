import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shapping = () => {
    const [user] =useAuthState(auth);
    const[name,setName] =useState('');
    const[email,setEmail] =useState('');
    const[address,setAddress] =useState('');
    const[phone,setPhone] =useState('');
    const[error,setError] =useState('');

    const handelNameBlur = (event) =>{
        setName(event.target.value)
    }
    
    const handelAddressBlur = (event) =>{
        setAddress(event.target.value)
    }
    const handelPhoneBlur = (event) =>{
        setPhone(event.target.value)
    }

    const handelCreatrUser = event =>{
        event.preventDefault();
        
    }
    return (
        <div className="form-container">
          <form onSubmit={handelCreatrUser}>
            <div>
              <h1 className="form-title">Sign-Up</h1>
              <div className="input-group">
                <label htmlFor="text">Your Name</label>
                <input onBlur={handelNameBlur} type="text" name="name" required/>
              </div>
              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input value={user?.email} readOnly type="email" name="email" required/>
              </div>
              <div className="input-group">
                <label htmlFor="text">Your Address</label>
                <input onBlur={handelAddressBlur} type="text" name="address" required/>
              </div>
              <div className="input-group">
                <label htmlFor="number">Phone Number</label>
                <input onBlur={handelPhoneBlur} type="number" name="phone" required/>
              </div>
            </div>
            <p className='error-color'>{error}</p>
            <button className="form-button">Shapping</button>
          </form>
        </div>
      );
};

export default Shapping;