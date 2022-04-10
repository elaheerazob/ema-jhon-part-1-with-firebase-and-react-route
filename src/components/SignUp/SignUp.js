import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';
const SignUp = () => {
    const[email,setEmail] =useState('');
    const[pass,setPass] =useState('');
    const[conformPass,setConformPass] =useState('');
    const[error,setError] =useState('');
    const nevigate =useNavigate();

    const [createUserWithEmailAndPassword,user] =useCreateUserWithEmailAndPassword(auth)

    const handelEmailBlur = (event) =>{
        setEmail(event.target.value)
    }
    const handelPassBlur = (event) =>{
        setPass(event.target.value)
    }
    const handelConformPassBlur = (event) =>{
        setConformPass(event.target.value)
    }

    if(user){
        nevigate('/shop');
    }

    const handelCreatrUser = event =>{
        event.preventDefault();
        if(pass !== conformPass){
            setError('Two Password Not Match')
            return;
        }
        if(pass.length <6){
            setError('Password Must be 6 character')
            return;
        }
        createUserWithEmailAndPassword(email,pass);
        
    }
    return (
        <div className="form-container">
          <form onSubmit={handelCreatrUser}>
            <div>
              <h1 className="form-title">Sign-Up</h1>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handelEmailBlur} type="text" name="email" required/>
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handelPassBlur} type="Password" name="Password" required/>
              </div>
              <div className="input-group">
                <label htmlFor="conform-password">Conform-Password</label>
                <input onBlur={handelConformPassBlur} type="Password" name="Conform-Password" required/>
              </div>
            </div>
            <p className='error-color'>{error}</p>
            <button className="form-button">Sign-Up</button>
            <p>Already have account<Link className="link-form" to='/login'>Login</Link></p>
          </form>
        </div>
      );
};

export default SignUp;