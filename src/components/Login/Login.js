import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const nevigate =useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPassBlur = (event) => {
    setPass(event.target.value);
  };

  if(user){
    nevigate(from,{replace :true})
  }
  const handelUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email,pass)
  };
  return (
    <div className="form-container">
      <form onSubmit={handelUserSignIn}>
        <div>
          <h1 className="form-title">Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handelEmailBlur} type="text" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handelPassBlur}
              type="Password"
              name="Password"
              required
            />
          </div>
        </div>
        <p>{error?.message}</p>
        {
          loading && <p>loading..</p>
        }
        <button className="form-button">Login</button>
        <p>
          New to Ema-Jhon{" "}
          <Link className="link-form" to="/signup">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
