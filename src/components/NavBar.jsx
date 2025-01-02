import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const NavBar = () => {
    const { user, signOutUser  } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

    const handleSignOut = () => {
        
        signOutUser ()
            .then(() => {
                
            })
            .catch(error => console.log('ERROR', error.message));
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            {user && (
                <>
                   
                    <li><NavLink to="/info">Information</NavLink></li>
                    <li><NavLink to="/myprofile">My Profile</NavLink></li>
                </>
            )}
        </>
    );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <div className="navbar bg-base-100 relative">
            <div className="navbar-start">
                <div>
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                        {/* Hamburger Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">MountainTour</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <img className='w-12 rounded-full ml-2' src={user.photoURL} alt="User  " />
                        <button onClick={handleSignOut} className='btn bg-emerald-500 ml-2'>Sign Out</button>
                        
                    </>
                ) : (
                    <Link to="/login" className='btn bg-emerald-500 '>Login</Link>
                    
                )}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="navbar-center lg:hidden mt-2 ml-16 absolute z-10 bg-white shadow-lg">
                    <ul className="menu menu-vertical px-1 mt-28"> {/* Added mt-2 for margin top */}
                        {links}
                        {user && (
                            <li>
                                <a onClick={handleSignOut} className='btn bg-emerald-500 '>Sign Out</a>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;