import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';



const NavBar = () => {



  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
      signOutUser()
          .then(() => {
              console.log('user sign out successfully')
          })
          .catch(error => console.log('ERROR', error.message))
  }




  const links = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
  <li><NavLink to="/register">Register</NavLink></li>
  {
      user && <>
   
          <li><NavLink to="/profile">Profile</NavLink></li>
      </>
  }

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
                <a className="btn">{name}</a>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <a onClick={handleSignOut} className='btn'>Sign Out</a>
                        </>
                        :
                        <Link to="/login">Login </Link>
                }
            </div>
        </div>
 


    );
};

export default NavBar;