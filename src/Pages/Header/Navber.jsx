// import React from 'react';

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";

const Navber = () => {
    const {user,logOut} = useContext(AuthContext)
    // const userAuth = useContext(AuthContext)
    // console.log(userAuth)
  
    const handleLogOut = ()=>{
      logOut()
      .then(()=>{console.log('user logged')})
      .catch(error=>{console.log(error)})
    }
    const links =<>
    <li><NavLink to="/"><a>Home</a></NavLink></li>
    <li><NavLink to="/login"><a>Login</a></NavLink></li>
    <li><NavLink to="/register"><a>Register</a></NavLink></li>
    <li><NavLink to="/order"><a>Order</a></NavLink></li>
    {
      user && <>
            <li><NavLink to="/profile"><a>Profile</a></NavLink></li>
            <li><NavLink to="/dashboard"><a>Dashbord</a></NavLink></li>
      </>

    }
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>

  </div>
  <div>
    {
        user ? <>
              <p>{user.email}</p>
              <button className="btn btn-primary ml-5" onClick={handleLogOut}>Sign Out</button>
        </> : <NavLink to ="/login">
              <button className="btn btn-primary ml-5" >login</button>
             </NavLink>
    }
     
  </div>

   </div>
    );
};

export default Navber;