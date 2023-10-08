// import React from 'react';

import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";

const Login = () => {
 const {signInUser} = useContext(AuthContext)
//  console.log(signInUser)
const navigate = useNavigate();

const handlerForm = e =>{
    e.preventDefault();
    const  email = e.target.email.value;
    const password = e.target.password.value
    console.log(email,password)

    signInUser(email,password)
    .then(result=>{
      console.log(result)
      alert('The login is succesfull')
      navigate('/')
    })
    .catch(error=>{
      console.log(error)
    })
}

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handlerForm}>
     <div className="card-body">
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <p><NavLink to="/register">you have no Account please <a className="text-blue">Register</a></NavLink></p>
        </div>
      </div>
     </form>
    </div>
  </div>
       </div>
    )
}  


export default Login;