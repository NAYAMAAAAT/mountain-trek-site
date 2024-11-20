import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const links =<>
   <li><NavLink to='/'>Home</NavLink></li>
 
  </>




    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div>
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">Mountain treks</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
 
  <div className="navbar-end">
    <a  className="btn bg-indigo-400">Log in</a>
    
  </div>
  <div className="pl-5">
    <a className="btn bg-blue-700 text-cyan-100">Register</a>
  </div>
</div>

    );
};

export default NavBar;