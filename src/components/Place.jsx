import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import { AuthContext } from './AuthProvider';

const Place = ({ place }) => {
    const { image, title, location, bookingAvailability, id, ecoFriendlyFeatures } = place;
    const { user } = useContext(AuthContext);

    return (
        <main className="animate__animated animate__bounce animate__faster 2s">
            <div className="card bg-base-100 w-96 shadow-xl p-6 mb-5">
                <figure className='bg-slate-400 py-2 rounded-2xl'>
                    <img src={image} className='h-[250px] rounded-2xl w-full object-cover' alt={title} />
                </figure>
                <h2 className="card-title">{title}</h2>
                <h2>Location: {location}</h2>
                <h2>Booking Availability: {bookingAvailability}</h2>
                <div>
                    <div className='pt-3'>Eco Friendly Features:
                        {
                            ecoFriendlyFeatures.map((ecoFriendlyFeature, index) => (
                                <p key={index} className="btn btn-xs bg-slate-300">{ecoFriendlyFeature}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='pt-3'>
                    {user ? (
                        <Link to={`/places/${id}`} className="btn btn-warning badge badge-outline">Explore Now</Link>
                    ) : (
                        <Link to="/login" className="btn btn-warning badge badge-outline">Explore Now</Link>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Place;
