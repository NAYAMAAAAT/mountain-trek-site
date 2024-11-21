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
   
          <li><NavLink to="/profile">Update Profile</NavLink></li>
          <li><NavLink to="/info">Information</NavLink></li>
          <li><NavLink to="/myprofile">My Profile</NavLink></li>
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
                
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            
                            <img className='w-12' src={user.photoURL} alt="" /> 
                            <a onClick={handleSignOut} className='btn bg-emerald-500'>Sign Out</a>
                        </>
                        :
                        <Link to="/login"> </Link>
                }
            </div>
        </div>
  

    );
};

export default NavBar;