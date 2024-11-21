import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div className="container mx-auto p-4 bg-red-400">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className="flex items-center">
                <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-44 h-40 rounded-full mr-4"
                />
                <div>
                    <p className="text-lg font-semibold">Welcome {user.email}</p>
                    <button class="btn btn-neutral">
                         <Link to="/profile" className='text-blue-500'>Update Profile</Link>
                         </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;